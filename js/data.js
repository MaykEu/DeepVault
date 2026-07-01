const FOLDERS = [
  { id: 'computer-systems',   name: 'Computer Systems',   icon: '🖥️', color: '#58a6ff' },
  { id: 'cpp-fundamentals',   name: 'C++ Fundamentals',   icon: '⚙️',  color: '#f0883e' },
  { id: 'game-math',          name: 'Game Math',           icon: '🎮', color: '#3fb950' },
  { id: 'ue-core',            name: 'UE Core',             icon: '🔧', color: '#bc8cff' },
  { id: 'ue-networking',      name: 'UE Networking',       icon: '🌐', color: '#f85149' },
  { id: 'big-o',              name: 'Big O Notation',      icon: '📊', color: '#d2991d' },
];

const NOTES = {
  'computer-systems': [
    'Bits, Bytes & Number Systems',
    'Negative Numbers & Endianness',
    'Assembly Language',
    'CPU Architecture',
    'Memory Hierarchy',
    'RAM & Virtual Memory',
    'Storage',
    'Function Calls & Stack Frames',
    'Compiler Pipeline',
    'Linking & Executables',
    'Syscalls & Kernel',
    'Threads & Processes',
    'Concurrency & Synchronization',
    'GPU Architecture Overview',
  ],
  'cpp-fundamentals': [
    'Stack vs Heap',
    'Object Memory Layout',
    'std::vector & Container Internals',
    'RAII, Lifetimes & The Rule of Five',
    'Smart Pointers & Ownership',
    'Move Semantics & Perfect Forwarding',
    'References',
    'const Correctness',
    'static in C++',
    'Enums & enum class',
    'Preprocessor & Macros',
    'Templates & Concepts',
    'Inheritance & Virtual Functions',
    'C++ Casting & RTTI',
  ],
  'game-math': [
    'Trigonometry & Vectors',
    'Matrices & Coordinate Systems',
    'Quaternions & 3D Rotations',
    'Curves, Interpolation & Kinematics',
    'Collision Detection Math',
    'Geometric Algebra',
  ],
  'ue-core': [
    'UHT, Macros & Reflection',
    'Pointer Ecosystem',
    'FName vs FString vs FText',
    'Casting in Unreal Engine',
    'UE Inheritance & UObject System',
    'Move Semantics in UE',
    'TArray Internals',
    'TMap Internals',
    'TSet Internals',
    'UE Enums & Flags',
  ],
  'ue-networking': [
    'Network Roles',
    'RPCs in Unreal Engine',
    'RepNotifies & OnRep',
    'PushModel & Dirty Marking',
    'Iris Replication System Overview',
    'Iris Filtering & Prioritization',
    'GAS Networking & Prediction',
  ],
  'big-o': [
    'The Big O Complexity Spectrum',
    'Amortized Analysis & Real Profiling Data',
    'Applied Examples - Raw C++ vs Unreal Engine',
  ],
};

// Only notes with actual quiz data
const QUIZ_NOTES = {
  'computer-systems': ['Bits, Bytes & Number Systems'],
  'cpp-fundamentals': [],
  'game-math': [],
  'ue-core': [],
  'ue-networking': [],
  'big-o': [],
};

const QUIZ_DATA = {};

// ============================================================
// Computer Systems / Bits, Bytes & Number Systems
// ============================================================
QUIZ_DATA['Bits, Bytes & Number Systems'] = {
  questions: [
    {
      type: 'multiple_choice',
      question: 'What is a bit physically inside a computer?',
      options: [
        'A tiny magnet',
        'A transistor storing voltage — high or low',
        'A microscopic gear',
        'A pulse of light',
      ],
      correctIndex: 1,
      explanation: 'A bit is a transistor that holds either a high voltage (1) or low voltage (0). Everything else — numbers, letters, programs — is built on top of this single physical reality.',
    },
    {
      type: 'multiple_choice',
      question: 'What is the value of binary 1010 in decimal?',
      options: ['8', '10', '12', '14'],
      correctIndex: 1,
      explanation: 'Column weights from left: 8, 4, 2, 1. 1010 = 8 + 0 + 2 + 0 = 10.',
    },
    {
      type: 'text_input',
      question: 'Convert binary 1111 to decimal. (Answer as a number — e.g., 42)',
      correctAnswer: '15',
      explanation: '1111 = 8+4+2+1 = 15. When every bit in a 4-bit number is set, the value is always 2^4 - 1 = 15.',
    },
    {
      type: 'multiple_choice',
      question: 'What happens when you incorrectly pad binary on the RIGHT for hex conversion?',
      options: [
        'Nothing — padding side does not matter',
        'The value is completely changed because column weights shift',
        'It only affects the last digit',
        'The computer auto-corrects it',
      ],
      correctIndex: 1,
      explanation: 'Padding on the RIGHT shifts all bits left, multiplying the value. 101 padded right → 1010 0000 = 160, but 101 padded left → 0000 0101 = 5. Always pad on the FAR LEFT.',
    },
    {
      type: 'multiple_choice',
      question: 'What does 0b1010 evaluate to in C++?',
      options: ['5', '8', '10', '16'],
      correctIndex: 2,
      explanation: '0b is the C++14 binary literal prefix. 0b1010 = 8+2 = 10.',
    },
    {
      type: 'text_input',
      question: 'How many bits are in one byte? (Answer as a number — e.g., 42)',
      correctAnswer: '8',
      explanation: 'A byte is 8 bits — standardized for ASCII text encoding. 2^8 = 256 possible values, enough for all Western letters, digits, and symbols.',
    },
    {
      type: 'multiple_choice',
      question: 'What is the value of hex 0x2F in decimal?',
      options: ['37', '47', '57', '27'],
      correctIndex: 1,
      explanation: '0x2F: 2 is in the 16s column (2×16=32). F=15 in the 1s column. 32+15=47.',
    },
    {
      type: 'multiple_choice',
      question: 'The hardware stores 11111111 in a byte. The compiler interprets it as int8_t. What value does the program see?',
      options: ['255', '-1', '127', '-128'],
      correctIndex: 1,
      explanation: 'Same bits, different meaning. As uint8_t: 255. As int8_t (two\'s complement): -1. The hardware does not know the difference — only the type system does.',
    },
    {
      type: 'text_input',
      question: 'What does the << operator do? 1 << 3 = ? (Answer as a decimal number — e.g., type 42)',
      correctAnswer: '8',
      explanation: 'Left shift moves every bit left by N positions. 1 << 3 = binary 00001000 = decimal 8. Each shift left doubles the number.',
    },
    {
      type: 'multiple_choice',
      question: 'What does flags |= (1 << 3) do?',
      options: [
        'Compares flags with bit 3',
        'Sets bit 3 of flags to 1',
        'Clears bit 3 of flags to 0',
        'Toggles bit 3 of flags',
      ],
      correctIndex: 1,
      explanation: '|= is OR-assign. 1 << 3 = 00001000. flags OR 00001000 sets bit 3 to 1 while leaving all other bits unchanged.',
    },
  ],
};
