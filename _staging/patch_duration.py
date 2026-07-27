
path = r"D:\User\Desktop\DeepVault\Obsidian\Game Development\Unreal Engine\Gameplay Abilities\Core Mechanics\ApplyGameplayEffectSpec Pipeline.md"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old = "### Step 8-9: Duration\n\n```cpp\nfloat DefCalcDuration = 0.f;\nif (AppliedEffectSpec.AttemptCalculateDurationFromDef(DefCalcDuration))\n{\n    AppliedEffectSpec.SetDuration(DefCalcDuration, false);\n}\n```\n\nDuration magnitude is evaluated (can be ScalableFloat, AttributeBased, Custom, or SetByCaller). Then:\n- Duration modifier mods are applied (e.g., \"+50%\" duration from other GEs)\n- MaxDuration is checked and clamps final duration\n- A `FTimerHandle` is set to fire `CheckDurationExpired` when duration runs out"

new = r"""### Step 8-9: Duration Calculation + Timer

Duration is evaluated in multiple stages:

**Stage 1: Base duration from definition**
```cpp
float DefCalcDuration = 0.f;
if (AppliedEffectSpec.AttemptCalculateDurationFromDef(DefCalcDuration))
{
    AppliedEffectSpec.SetDuration(DefCalcDuration, false);
}
else if (Def->DurationMagnitude.GetMagnitudeCalculationType() == SetByCaller)
{
    // Fallback: SetByCaller duration from the spec
    Def->DurationMagnitude.AttemptCalculateMagnitude(AppliedEffectSpec, AppliedEffectSpec.Duration);
}
```

**Stage 2: Apply duration modifier mods**
```cpp
float FinalDuration = AppliedEffectSpec.CalculateModifiedDuration();
// Applies "duration +10%" type mods from other active GEs

if (CarryOverDuration > 0.0f)
    FinalDuration += CarryOverDuration;  // stacking extension
```

**Stage 3: Clamp to MaxDuration**
```cpp
float SpecMaxDuration = 0.0f;
if (!AppliedEffectSpec.AttemptCalculateMaxDurationFromDef(SpecMaxDuration))
{
    // Fallback: SetByCaller max duration
    Def->MaxDurationMagnitude.AttemptCalculateMagnitude(AppliedEffectSpec, SpecMaxDuration);
}

if (FinalDuration <= 0.f)
    FinalDuration = 0.1f;  // minimum, clamped via error log
else if (SpecMaxDuration > 0.0f && FinalDuration > SpecMaxDuration)
    FinalDuration = SpecMaxDuration;

AppliedEffectSpec.SetDuration(FinalDuration, false);
OnDurationChange(*AppliedActiveGE);  // broadcast to listeners
```

**Stage 4: Register timer**
```cpp
if (Owner && bSetDurationTimer)
{
    FTimerDelegate Delegate = FTimerDelegate::CreateUObject(Owner,
        &UAbilitySystemComponent::CheckDurationExpired, AppliedActiveGE->Handle);
    TimerManager.SetTimer(AppliedActiveGE->DurationHandle, Delegate, FinalDuration, false);

    if (!ensureMsgf(AppliedActiveGE->DurationHandle.IsValid(), ...))
    {
        // Fallback: force execution next tick
        TimerManager.SetTimerForNextTick(Delegate);
    }
}
```

Duration magnitude types (same as modifier magnitudes): ScalableFloat, AttributeBased, Custom via MMC, or SetByCaller.
"""

if old in content:
    content = content.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("OK")
else:
    print("NOTFOUND")
