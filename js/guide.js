const Guide = {
  render(container) {
    container.innerHTML = `<div class="learn-note">
      <a href="#" class="back-link" onclick="router.navigate('#/')">\u2190 Dashboard</a>
      <div class="learn-body">
        <h1>\u{1F4DA} DeepVault Guide</h1>

        <blockquote class="callout callout-info"><strong>What is this?</strong><br>
        DeepVault is a <strong>free, offline-first, interactive learning platform</strong> for mastering computer science, C++, Unreal Engine, and game math. Every note in your Obsidian vault is here as a readable lesson with built-in quizzes. No internet required. No accounts. Just knowledge.
        </blockquote>

        <p>The goal is simple: <strong>master every subject in this vault through active recall.</strong> Read the notes, take the quizzes, track your progress. Everything is stored locally on your device.</p>

        <h2>\u{1F680} How to Use DeepVault</h2>
        <ol>
          <li><strong>\u{1F4D6} Learn</strong> — Click any note to read it. The sidebar table of contents lets you jump to any section. Wiki links navigate between related notes across all folders.</li>
          <li><strong>\u270F\uFE0F Quiz</strong> — Test yourself with multiple-choice and text-input questions. Instant feedback tells you what you got wrong and why.</li>
          <li><strong>\u{1F4CA} Track</strong> — Every quiz attempt is saved. Your dashboard shows which folders you've studied. Revisit weak spots.</li>
        </ol>

        <h2>\u{1F9ED} Mastery Path — Read in This Order</h2>
        <p>These layers build on each other. Don't skip ahead.</p>

        <h3>Layer 1 — How Computers Work <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;">(2-3 weeks)</span></h3>
        <ol>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Bits%2C%20Bytes%20%26%20Number%20Systems/learn')">Bits, Bytes &amp; Number Systems</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Negative%20Numbers%20%26%20Endianness/learn')">Negative Numbers &amp; Endianness</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Assembly%20Language/learn')">Assembly Language</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/CPU%20Architecture/learn')">CPU Architecture</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Memory%20Hierarchy/learn')">Memory Hierarchy</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/RAM%20%26%20Virtual%20Memory/learn')">RAM &amp; Virtual Memory</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Storage/learn')">Storage</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Function%20Calls%20%26%20Stack%20Frames/learn')">Function Calls &amp; Stack Frames</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Compiler%20Pipeline/learn')">Compiler Pipeline</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Linking%20%26%20Executables/learn')">Linking &amp; Executables</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Syscalls%20%26%20Kernel/learn')">Syscalls &amp; Kernel</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Threads%20%26%20Processes/learn')">Threads &amp; Processes</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/Concurrency%20%26%20Synchronization/learn')">Concurrency &amp; Synchronization</a></li>
          <li>Computer Systems / <a href="#" onclick="router.navigate('#/folder/computer-systems/note/GPU%20Architecture%20Overview/learn')">GPU Architecture Overview</a></li>
        </ol>

        <h3>Layer 2 — Pure C++ <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;">(4-6 weeks)</span></h3>
        <ol>
          <li>C++ Fundamentals / Stack vs Heap</li>
          <li>C++ Fundamentals / Object Memory Layout</li>
          <li>C++ Fundamentals / std::vector &amp; Container Internals</li>
          <li>C++ Fundamentals / RAII, Lifetimes &amp; The Rule of Five</li>
          <li>C++ Fundamentals / Smart Pointers &amp; Ownership</li>
          <li>C++ Fundamentals / Move Semantics &amp; Perfect Forwarding</li>
          <li>C++ Fundamentals / const Correctness</li>
          <li>C++ Fundamentals / static in C++</li>
          <li>C++ Fundamentals / References</li>
          <li>C++ Fundamentals / Enums &amp; enum class</li>
          <li>C++ Fundamentals / Preprocessor &amp; Macros</li>
          <li>C++ Fundamentals / Templates &amp; Concepts</li>
          <li>C++ Fundamentals / Inheritance &amp; Virtual Functions</li>
          <li>C++ Fundamentals / C++ Casting &amp; RTTI</li>
          <li>C++ Fundamentals / Lambdas &amp; Function Objects</li>
          <li>C++ Fundamentals / Type Deduction — auto, decltype</li>
          <li>C++ Fundamentals / Structured Bindings</li>
          <li>C++ Fundamentals / Operator Overloading</li>
          <li>C++ Fundamentals / String Types &amp; string_view</li>
          <li>C++ Fundamentals / std::array &amp; C Arrays</li>
          <li>C++ Fundamentals / Explicit &amp; Implicit Conversion</li>
        </ol>

        <h3>Layer 3 — Big O Notation <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;">(1 week)</span></h3>
        <ol>
          <li>Big O Notation / The Big O Complexity Spectrum</li>
          <li>Big O Notation / Amortized Analysis &amp; Real Profiling Data</li>
          <li>Big O Notation / Applied Examples - Raw C++ vs Unreal Engine</li>
        </ol>

        <h3>Layer 4 — Game Math <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;">(3-4 weeks)</span></h3>
        <ol>
          <li>Game Math / Trigonometry &amp; Vectors</li>
          <li>Game Math / Matrices &amp; Coordinate Systems</li>
          <li>Game Math / Quaternions &amp; 3D Rotations</li>
          <li>Game Math / Curves, Interpolation &amp; Kinematics</li>
          <li>Game Math / Collision Detection Math</li>
          <li>Game Math / FVector, FRotator, FQuat — The Core Types</li>
          <li>Game Math / FTransform &amp; FMatrix</li>
          <li>Game Math / FMath — Interpolation &amp; Utility</li>
          <li>Game Math / Collision &amp; Intersection Math</li>
          <li>Game Math / Curves, Ranges &amp; Random</li>
          <li>Game Math / Geometric Algebra</li>
        </ol>

        <h3>Layer 5 — Unreal Engine Core <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;">(2-3 weeks)</span></h3>
        <ol>
          <li>UE Core / UHT, Macros &amp; Reflection</li>
          <li>UE Core / UE Inheritance &amp; UObject System</li>
          <li>UE Core / Pointer Ecosystem</li>
          <li>UE Core / FName vs FString vs FText</li>
          <li>UE Core / Casting in Unreal Engine</li>
          <li>UE Core / Move Semantics in UE</li>
          <li>UE Core / TArray Internals</li>
          <li>UE Core / TMap Internals</li>
          <li>UE Core / TSet Internals</li>
          <li>UE Core / UE Enums &amp; Flags</li>
          <li>UE Core / UE Templates &amp; T-Containers</li>
        </ol>

        <h3>Layer 6 — Unreal Engine Networking <span style="font-size:0.75rem;color:var(--text-muted);font-weight:400;">(2-3 weeks)</span></h3>
        <ol>
          <li>UE Networking / Network Roles</li>
          <li>UE Networking / RPCs in Unreal Engine</li>
          <li>UE Networking / RepNotifies &amp; OnRep</li>
          <li>UE Networking / PushModel &amp; Dirty Marking</li>
          <li>UE Networking / Iris Replication System Overview</li>
          <li>UE Networking / Iris Filtering &amp; Prioritization</li>
          <li>UE Networking / GAS Networking &amp; Prediction</li>
        </ol>

        <h2>\u{1F4CA} Tracking Your Progress</h2>
        <p>Every quiz you complete is stored in your browser's local storage. Your dashboard shows completion percentages for each folder. The score history page shows every attempt for every note.</p>
        <p><strong>Goal:</strong> Achieve 80%+ on every quiz in every folder. Revisit notes where you score below 80%.</p>

        <h2>\u{1F4D6} Reference</h2>
        <ul>
          <li><a href="#" onclick="router.navigate('#/reference/Glossary')">Glossary</a> — Quick definitions for every acronym (MMU, TLB, PTE, futex, PLT, GOT, etc.)</li>
          <li><a href="#" onclick="router.navigate('#/reference/Learning%20Path')">Learning Path</a> — Detailed reading order within the Computer Systems folder</li>
        </ul>
      </div>
    </div>`;
  },
};
