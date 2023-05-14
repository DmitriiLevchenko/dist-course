export const conditionTest = [
    {
        "question": "What keyword is used for conditional statements in Python?",
        "answers": ["if", "check", "test", "conditional"],
        "correctAnswer": "if"
    },
    {
        "question": "How do you check if a value is equal to another value in Python?",
        "answers": ["=", "==", "===", "equals"],
        "correctAnswer": "=="
    },
    {
        "question": "Which of these operators checks if a value is not equal to another?",
        "answers": ["!=", "<>", "!-", "!=="],
        "correctAnswer": "!="
    },
    {
        "question": "What is the correct syntax for an 'else if' statement in Python?",
        "answers": ["else if", "elsif", "elseif", "elif"],
        "correctAnswer": "elif"
    },
    {
        "question": "Which of these keywords ends an if statement in Python?",
        "answers": ["end", "endif", "stop", "None of these"],
        "correctAnswer": "None of these"
    }
]

export const loopTest = [
    {
        question: 'What keyword ends a loop prematurely in Python?',
        answers: ['end', 'break', 'exit', 'stop'],
        correctAnswer: 'break',
    },
    {
        question: 'What keyword skips the current iteration of a loop in Python?',
        answers: ['continue', 'skip', 'next', 'pass'],
        correctAnswer: 'continue',
    },
    {
        question: 'What keyword is used to create a for loop in Python?',
        answers: ['for', 'loop', 'do', 'while'],
        correctAnswer: 'for',
    },
    {
        question: 'What keyword is used to create a while loop in Python?',
        answers: ['while', 'do', 'for', 'loop'],
        correctAnswer: 'while',
    },
    {
        question: 'How do you loop through each item in a list?',
        answers: ['for item in list:', 'for item do list:', 'for each item in list:', 'for item list:'],
        correctAnswer: 'for item in list:',
    },
    {
        question: 'What is the output of the following code? for i in range(3): print(i)',
        answers: ['0 1 2', '1 2 3', '0 1', 'None of the above'],
        correctAnswer: '0 1 2',
    },
    {
        question: 'What is the output of the following code? while False: print("Hello")',
        answers: ['Hello', 'Hello repeated indefinitely', 'No output', 'Error'],
        correctAnswer: 'No output',
    },
    {
        question: 'What is the output of the following code? for i in "Hello": print(i)',
        answers: ['H e l l o', 'Hello', 'H\n e\n l\n l\n o\n', 'None of the above'],
        correctAnswer: 'H\n e\n l\n l\n o\n',
    },
    {
        question: 'What will the following code output? for i in range(2, 5): print(i)',
        answers: ['2 3 4', '2 3', '3 4 5', 'None of the above'],
        correctAnswer: '2 3 4',
    },
    {
        question: 'What will cause an infinite loop in Python?',
        answers: ['for i in range(10): print(i)', 'while True: print("Hello")', 'for i in "Hello": print(i)', 'None of the above'],
        correctAnswer: 'while True: print("Hello")',
    },
];


export const arrayTest = [
    {
        question: 'What is an array in Python?',
        answers: ['A data type that stores multiple values in a single variable', 'A loop that iterates over a sequence of values', 'A function that performs operations on multiple values', 'A conditional statement that checks for specific values'],
        correctAnswer: 'A data type that stores multiple values in a single variable',
    },
    {
        question: 'How do you create an empty array in Python?',
        answers: ['array = []', 'array = {}', 'array = ()', 'array = None'],
        correctAnswer: 'array = []',
    },
    {
        question: 'What is the index of the first element in an array?',
        answers: ['0', '1', '-1', 'None of the above'],
        correctAnswer: '0',
    },
    {
        question: 'How do you access the third element in an array?',
        answers: ['array[2]', 'array[3]', 'array[1]', 'array[0]'],
        correctAnswer: 'array[2]',
    },
    {
        question: 'What is the output of the following code? array = [1, 2, 3]; print(len(array))',
        answers: ['1', '2', '3', 'None of the above'],
        correctAnswer: '3',
    },
    {
        question: 'What method is used to add an element to the end of an array?',
        answers: ['append()', 'insert()', 'extend()', 'pop()'],
        correctAnswer: 'append()',
    },
    {
        question: 'What method is used to remove an element from an array?',
        answers: ['remove()', 'delete()', 'pop()', 'clear()'],
        correctAnswer: 'remove()',
    },
    {
        question: 'What is the output of the following code? array = [1, 2, 3]; array.reverse(); print(array)',
        answers: ['[3, 2, 1]', '[1, 2, 3]', '[1, 3, 2]', 'None of the above'],
        correctAnswer: '[3, 2, 1]',
    },
    {
        question: 'What is the output of the following code? array = [1, 2, 3]; array.sort(); print(array)',
        answers: ['[1, 2, 3]', '[3, 2, 1]', '[1, 3, 2]', 'None of the above'],
        correctAnswer: '[1, 2, 3]',
    },
    {
        question: 'What method is used to find the index of a specific element in an array?',
        answers: ['index()', 'find()', 'search()', 'locate()'],
        correctAnswer: 'index()',
    },
];

export const fileTest = [
    {
        "question": "What is the function used to open a file in Python?",
        "answers": [
            "A. open_file()",
            "B. read_file()",
            "C. load_file()",
            "D. file_open()"
        ],
        "correctAnswer": "A. open_file()"
    },
    {
        "question": "How do you read the contents of a file in Python?",
        "answers": [
            "A. read_file()",
            "B. open_file()",
            "C. load_file()",
            "D. file_read()"
        ],
        "correctAnswer": "B. open_file()"
    },
    {
        "question": "How do you write data to a file in Python?",
        "answers": [
            "A. write_file()",
            "B. open_file()",
            "C. save_file()",
            "D. file_write()"
        ],
        "correctAnswer": "D. file_write()"
    },
    {
        "question": "How do you append data to an existing file in Python?",
        "answers": [
            "A. append_file()",
            "B. add_file()",
            "C. file_append()",
            "D. open_file()"
        ],
        "correctAnswer": "C. file_append()"
    },
    {
        "question": "How do you close a file in Python?",
        "answers": [
            "A. close_file()",
            "B. file_close()",
            "C. end_file()",
            "D. open_file()"
        ],
        "correctAnswer": "A. close_file()"
    }
]


export const classTest = [
    {
        "question": "What is a class in Python?",
        "answers": [
            "A. A built-in data type",
            "B. A function that performs mathematical operations",
            "C. A collection of related variables and functions",
            "D. A conditional statement that checks for specific values"
        ],
        "correctAnswer": "C. A collection of related variables and functions"
    },
    {
        "question": "How do you define a class in Python?",
        "answers": [
            "A. class MyClass",
            "B. define MyClass",
            "C. class = MyClass",
            "D. def MyClass"
        ],
        "correctAnswer": "A. class MyClass"
    },
    {
        "question": "What is the purpose of the __init__ method in a class?",
        "answers": [
            "A. To initialize the class attributes",
            "B. To define the class methods",
            "C. To perform arithmetic operations",
            "D. To check for specific conditions"
        ],
        "correctAnswer": "A. To initialize the class attributes"
    },
    {
        "question": "How do you create an instance of a class in Python?",
        "answers": [
            "A. object = MyClass()",
            "B. instance = MyClass()",
            "C. obj = new MyClass()",
            "D. inst = create MyClass()"
        ],
        "correctAnswer": "B. instance = MyClass()"
    },
    {
        "question": "What is inheritance in Python?",
        "answers": [
            "A. A mechanism to create multiple instances of a class",
            "B. A way to define class methods",
            "C. The process of creating a new class from an existing class",
            "D. A conditional statement that checks for specific values"
        ],
        "correctAnswer": "C. The process of creating a new class from an existing class"
    }
]

export const variableTest = [
    {
        "question": "Which of the following is the correct way to declare a variable in Python?",
        "answers": [
            "A. int x = 10;",
            "B. x = 10",
            "C. let x = 10;",
            "D. var x = 10;"
        ],
        "correctAnswer": "B. x = 10"
    },
    {
        "question": "Which of the following data types does not exist in Python?",
        "answers": [
            "A. list",
            "B. map",
            "C. dictionary",
            "D. tuple"
        ],
        "correctAnswer": "B. map"
    },
    {
        "question": "In Python, what value does a variable of the None type hold?",
        "answers": [
            "A. 0",
            "B. ''",
            "C. 'None'",
            "D. It does not hold any value"
        ],
        "correctAnswer": "D. It does not hold any value"
    },
];

export const functionAndClassTest = [
    {
        "question": "How is a function defined in Python?",
        "answers": [
            "A. define function()",
            "B. function myFunction()",
            "C. def myFunction()",
            "D. myFunction(){}"
        ],
        "correctAnswer": "C. def myFunction()"
    },
    {
        "question": "Which keyword is used to create a class in Python?",
        "answers": [
            "A. def",
            "B. class",
            "C. create",
            "D. make"
        ],
        "correctAnswer": "B. class"
    },
    {
        "question": "How do you create an instance of a class in Python?",
        "answers": [
            "A. MyClass object = new MyClass()",
            "B. object = MyClass()",
            "C. MyClass object = MyClass.create()",
            "D. MyClass object = MyClass()"
        ],
        "correctAnswer": "B. object = MyClass()"
    },
    {
        "question": "What is the purpose of the __init__ method in a Python class?",
        "answers": [
            "A. It is used to initialize the class attributes",
            "B. It is used to create class methods",
            "C. It performs arithmetic operations",
            "D. It checks for specific conditions"
        ],
        "correctAnswer": "A. It is used to initialize the class attributes"
    },
    {
        "question": "What is a method in a Python class?",
        "answers": [
            "A. A built-in Python function",
            "B. A function that belongs to a class",
            "C. A variable inside a class",
            "D. A separate function that takes a class as a parameter"
        ],
        "correctAnswer": "B. A function that belongs to a class"
    }
]


