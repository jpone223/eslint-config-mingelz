module.exports = {
  "rules": {
    // 数组的中括号与数组项之间是否需要另起一行
    // 目前 array-bracket-newline, array-element-newline 两项在风格判断上仍无法让人满意，暂时关掉检测
    "array-bracket-newline": [2,
      // 可以为关键字 always, never, consistent
      // consistent: 括号两边保持一致，要么都有换行，要么都没换行
      "consistent",
      // 也可以是一个对象
      // {
      //   // 如果数组项有用换行分隔，则括号与项间也要跟换行
      //   "multiline": true,
      //   // 当数组达到多少项时，就需要在另一起行来写数组项，如为 0 则等同于 always，如果不做检查则设置为 null
      //   "minItems": null,
      // },
    ],

    // 数组的中括号前后是否要加空格
    "array-bracket-spacing": [2,
      // 可以为关键字 always, never，也可以是一个对象
      // 当使用 never 时，默认有个例外：允许中括号后跟换行；当使用 always 时也有例外：允许空数组的中间没有空格
      "never",
      // {
      //   // 当数组只有一项时，是否要加空格
      //   "singleValue": false,
      //   // 如果数组项是对象，则数组的中括号与对象的大括号间是否要加空格
      //   "objectsInArrays": false,
      //   // 如果数组项是数组，则两级数组的中括号间是否要加空格
      //   "arraysInArrays": false,
      // },
    ],

    // 数组的项之间是否要另起一行，请与 array-bracket-newline 对照着看
    "array-element-newline": [0,
      // 可以为关键字 always, never，也可以是一个对象
      {
        // 如果数组项有用换行分隔，则每一项都要用换行分隔
        "multiline": true,
        // 当数组达到多少项时，就要求数组项间使用换行，如为 0 则等同于 always，如果不做检查则设置为 null
        "minItems": null,
      },
    ],

    // 代码块前后是否要有空格
    "block-spacing": [2,
      "always",
    ],

    // 大括号的风格
    "brace-style": [2,
      // 1tbs: "on true brace style"，绝大多数前端项目的风格，`{` 前无换行、`}` 后如果整个逻辑结束则不换行
      // stroustrup: 与 1tbs 类似，但在 `else`, `catch` 这种与前一个语句有关联的关键字前要换行
      // allman: `{` 前都要换行
      "stroustrup",
      {
        // 有些情况可能只在一行里写
        "allowSingleLine": true,
      },
    ],

    // 使用驼峰表示变量
    "camelcase": [2,
      {
        // 对象的属性名是否使用驼峰，可选 always 或 never
        "properties": "always",
      },
    ],

    // 注释的首字母是否要大写
    "capitalized-comments": [0,
      // 可选 always 或 never
      "never",
      {
        // 针对单行注释
        "line": {
          // 要忽略的正则字符串
          "ignorePattern": "",
          // 是否忽略行内注释
          "ignoreInlineComments": true,
          // 是否忽略连续的单行注释
          "ignoreConsecutiveComments": true,
        },
        // 针对块注释
        "block": {
          // 要忽略的正则字符串
          "ignorePattern": "",
          // 是否忽略行内注释
          "ignoreInlineComments": true,
          // 是否忽略连续的单行注释
          "ignoreConsecutiveComments": true,
        },
      },
    ],

    // 对象和数组最后一个 value 后是否加逗号
    // 当拆分成多行时，如果最后一项有逗号，当再添加一项时，前一行无需修改，不会产生 diff 变化
    "comma-dangle": [2,
      // 可以使用以下字符串，也可以针对每种情况分别定义
      // never: 最后一项不要加逗号
      // always: 最后一项一律要加逗号
      // always-multiline: 当对象或数组的项被拆分到多行时最后加逗号
      // only-multiline: 与 always-multiline 不同的是，只在项被拆到多行进才允许在最后加逗号（但不加也可以）
      "always-multiline",
      // {
      //   // 针对数组和对象
      //   "arrays": "always-multiline",
      //   "objects": "always-multiline",
      //   // 针对 import, export 的项
      //   "imports": "always-multiline",
      //   "exports": "always-multiline",
      //   // 针对函数的参数，注意仅 ES2017 之后的版本才支持，否则语法报错
      //   "functions": "always-multiline",
      // },
    ],

    // 逗号前后是否要有空格
    "comma-spacing": [2,
      {
        "before": false,
        "after": true,
      },
    ],

    // 当涉及多项之间的换行时，逗号在前还是在后
    "comma-style": [2,
      "last",

      // 另有第二个参数，用于添加各种例外，忽略某种语句中的逗号风格
      // "exceptions": {
      //   // 数组表达式
      //   "ArrayExpression": true,
      //   // 数组的解构
      //   "ArrayPattern": true,
      //   // 箭头函数的参数
      //   "ArrowFunctionExpression": true,
      //   // 函数 `call` 方法中的参数
      //   "CallExpression": true,
      //   // 普通函数定义中的参数
      //   "FunctionDeclaration": true,
      //   // 函数表达式中的参数
      //   "FunctionExpression": true,
      //   // import 中的定义
      //   "ImportDeclaration": true,
      //   // 对象表达式
      //   "ObjectExpression": true,
      //   // 对象的解构
      //   "ObjectPattern": true,
      //   // 变量定义
      //   "VariableDeclaration": true,
      //   // new 表达式
      //   "NewExpression": true,
      // },
    ],

    // 在 ES2015 中属性名可以使用变量，变量中括号内，是否要有空格
    "computed-property-spacing": [2,
      "never",
    ],

    // 给 this 一个专门的名字，保持连贯性
    "consistent-this": [2,
      // 一般比较常用 that, me, _this ...
      "_this",
    ],

    // 文件最后是否要空一行
    // 建议空一行，因为在 github 等 Web 端查看代码时，如果最后没有空行会提示 `No newline at end of file`
    // 同时建议使用 editorconfig 等工具进行配置，保证在文件保存时如果没有可以自动添加上这个空行
    "eol-last": [2,
      "always",
    ],

    // 函数调用时函数名与括号中间是否有空格
    "func-call-spacing": [2,
      // 可选 always 或 never
      "never",
    ],

    // 函数是否一定要有名字，给匿名函数起名字主要是为了方便调试
    "func-names": 1,

    // 函数名是否要和定义时的变量匹配上
    "func-name-matching": [0,
      // 要求 `var foo = function foo () {}`
      "always",
      {
        // 是否限制 CommonJs 的 `modole.exports`
        "includeCommonJSModuleExports": false,
      },
    ],

    // 函数风格，使用函数定义，还是变量定义
    // 建议统一使用 `const fn = () => {}`，保证函数总是先定义再使用
    "func-style": [2,
      "expression",
      {
        // 是否允许箭头函数
        "allowArrowFunctions": true,
      },
    ],

    // 函数参数括号与参数项之间是否要换行
    "function-paren-newline": [2,
      // always: 总是换行
      // never: 总不换行
      // multiline: 当参数间出现换行时，括号与参数之间也换行
      // consistent: `(` 与 `)` 的行为一致，要么都加换行，要么都无换行，不管参数之间是否有换行
      // {minItems: 3}: 注意前几个是字符串，最后这个是对象，当参数达到多少项时，就要求换行
      "multiline",
    ],

    // 变量名、函数名、参数名、对象属性名不允许使用以下单词
    "id-blacklist": [0,
      // 不允许的单词在后边列出
      "data",
      "error",
      "callback",
    ],

    // 变量名、函数名、对象属性名的长度
    "id-length": [0,
      {
        // 最小长度
        "min": 1,
        // 最大长度
        "max": 50,
        // 是否检查对象属性名
        "properties": "always",
        // 例外
        "exceptions": [],
      },
    ],

    // 变量、函数名、对象属性名的命名规范
    "id-match": [0,
      // 对应的正则匹配
      "^[A-Za-z]+([A-Z][a-z0-9]*)*$",
      {
        // 是否检查对象属性名
        "properties": true,
      },
    ],

    // 当使用箭头函数的隐式返回值时（即函数体没有 `{}` 包裹），函数体的位置（是否需要折行）
    "implicit-arrow-linebreak": [2,
      // beside: 跟在箭头后边，不能折行。此规则下允许使用 `()` 或 `{}` 套住函数体，括号紧跟箭头，而函数体另起一行
      // below: 在箭头的下一行
      "beside",
    ],

    // 使用何种缩进方式
    "indent": [2,
      // 以空格缩进时写数字，表示空格的个数，以 tab 编进则写字符串 'tab'
      2,
      {
        // switch/case 语句是否缩进，1 指 1 个缩进
        // 用这里的数字乘前边的缩进数，就是具体要缩进的量，下同
        "SwitchCase": 1,
        // 定义变量的时候如果使用逗号分隔一行一个，如何缩进
        "VariableDeclarator": {
          "var": 2,
          "let": 2,
          "const": 3,
        },
        // 文件级别的 IIFE 内容有几个缩进
        "outerIIFEBody": 1,
        // 属性的缩进
        "MemberExpression": 1,
        // 函数的缩进
        "FunctionDeclaration": {
          // 参数，除了数字，也可以用 first，用来表示和第一个参数对齐
          "parameters": 1,
          // 函数体
          "body": 1,
        },
        // 函数表达式的缩进，参考上边的 FunctionDeclaration
        "FunctionExpression": {
          "parameters": 1,
          "body": 1,
        },
        // 函数调用时的参数
        "CallExpression": {
          // 函数调用的参数
          "arguments": 1,
        },
        // 数组多个项的缩进
        "ArrayExpression": 1,
        // 对象多个项的缩进
        "ObjectExpression": 1,
        // import 语句的缩进
        "ImportDeclaration": 1,
        // 三元表达式 `?:` 中间有换行时，是否需要编进
        "flatTernaryExpressions": true,
        // 忽略检查的项，这个 Nodes 是个 ESLint 的 Selector，可参考 https://eslint.org/docs/developer-guide/selectors
        // "ignoredNodes": [],
        // 是否忽略注释的缩进
        "ignoreComments": false,
      },
    ],

    // jsx 语法倾向于使用哪一种引号
    "jsx-quotes": [2,
      "prefer-double",
    ],

    // 在对象的冒号前后是否要有空格
    "key-spacing": [2,
      {
        // mode 定义空格风格，strict 为仅允许一个空格， minimum 为可因为对齐的原因多加几个空格，但对齐后，不能再多空格
        "mode": "strict",
        // 在冒号前后是否要空格
        "beforeColon": false,
        "afterColon": true,
        // 另有根据冒号还是值进行对齐的项，包括 align, singleLine, multiLine 等的配置，如有需要可参考 https://eslint.org/docs/rules/key-spacing
        // "align": {},
        // "singleLine": {},
        // "multiLine": {},
      },
    ],

    // 关键字前后的空格检查，如 `return{foo: 1}` 是合法的
    "keyword-spacing": [2,
      {
        // 关键字前后的空格
        "before": true,
        "after": true,
        // 以关键字为 key 的例外定义
        // "overrides": {
        //   "function": {
        //     "before": false,
        //   },
        // },
      },
    ],

    // 单行注释的位置
    // 个人喜欢将单行注释另起一行，就像现在这个项目。有些人喜欢将注释与对应的代码写在同一行
    "line-comment-position": [2,
      {
        // 位置，above: 在代码的上面；beside: 代码后边
        "position": "above",
        // 忽略的正则匹配
        "ignorePattern": "",
        // 此检测默认忽略掉以下单词开始的注释：eslint, jshint, jslint, istanbul, global, exported, jscs, falls through，此选项用于关闭这个默认配置
        "applyDefaultPatterns": true,
      },
    ],

    // 回车符号使用哪个版本 CR/LF
    "linebreak-style": [2,
      // 可选 windows 或 unix
      "unix",
    ],

    // 定义注释前后的细节
    "lines-around-comment": [2,
      {
        // 在块注释前是否空一行
        "beforeBlockComment": true,
        // 在块注释后是否空一行
        "afterBlockComment": false,
        // 在单行注释前是否空一行
        "beforeLineComment": false,
        // 在单行注释后是否空一行
        "afterLineComment": false,
        // 在 Block 第一行时，是否检查注释前是否有空行
        "allowBlockStart": true,
        // 在 Block 最后一行时，是否检查注释后是否有空行
        "allowBlockEnd": true,
        // 在 Class 第一行时，是否检查注释前是否有空行（与 Block 类似）
        "allowClassStart": true,
        // 在 Class 最后一行时，是否检查注释后是否有空行（与 Block 类似）
        "allowClassEnd": true,
        // 在 Object 第一行时，是否检查注释前是否有空行
        "allowObjectStart": true,
        // 在 Object 最后一行时，是否检查注释后是否有空行
        "allowObjectEnd": true,
        // 在 Array 第一行时，是否检查注释前是否有空行
        "allowArrayStart": true,
        // 在 Array 最后一行时，是否检查注释后是否有空行
        "allowArrayEnd": true,
        // 需要忽略的匹配，默认会忽略如 eslint, istanbul 等等的注释
        // "ignorePattern": "",
        // 当配置了 ignorePattern 时，是否仍然匹配默认的 ignorePattern
        // "applyDefaultIgnorePatterns": true,
      },
    ],

    // 在 Class 的方法与方法间，是否需要插入空行
    "lines-between-class-members": [2,
      // 有 never 和 always 可选
      "always",
      // 另有一个配置项
      {
        // 当某方法只有一行时，是否忽略检测
        "exceptAfterSingleLine": false,
      },
    ],

    // 每个函数中最大可嵌套的层数
    "max-depth": [0,
      4,
    ],

    // 每行的最大长度，太长了建议多换些行
    "max-len": [1,
      // 之前 code/tabWidth 两项是单独拿出来的，从 4.13 开始统一放在了配置项里
      {
        // 代码行每行 80 个字符
        "code": 80,
        // 一个 <tab> 算几个字符，注意这里指的是 <tab> 字符，而不是缩进对应的空格数
        "tabWidth": 4,
        // 注释最长多少个字符，默认和 code 相同
        // "comments": 80,
        // 是否忽略注释
        "ignoreComments": true,
        // 是否忽略因为结尾注释才超过限定长度
        "ignoreTrailingComments": true,
        // 是否忽略 URL
        "ignoreUrls": true,
        // 是否忽略字符串
        "ignoreStrings": true,
        // 是否忽略模板字符串
        "ignoreTemplateLiterals": true,
        // 是否忽略正则表达式
        "ignoreRegExpLiterals": true,
        // 其他要忽略的匹配，内容为正则字符串
        // "ignorePattern": "",
      },
    ],

    // 一个文件最多多少行，太长了建议拆成多个文件
    "max-lines": [1,
      {
        "max": 500,
        // 跳过空白行
        "skipBlankLines": true,
        // 跳过注释行
        "skipComments": true,
      },
    ],

    // 最多嵌套多少层 callback
    "max-nested-callbacks": [0,
      3,
    ],

    // 一个函数最多可以有多少个参数
    "max-params": [1,
      9,
    ],

    // 一个函数中最多可以有多少条语句
    "max-statements": [0,
      100,
    ],

    // 一行最多可以有多少条语句
    "max-statements-per-line": [2,
      {
        "max": 1,
      },
    ],

    // 多行注释的样式
    "multiline-comment-style": [0,
      // 以下配置三选一
      // starred-block: 不允许出现多个连续的单行注释（就像现在这些注释这样），且使用块注释时，每行要用星号对齐
      // bare-block: 不允许出现多个连续的单行注释，且使用块注释时，每行开头不能有多余星号
      // separate-lines: 不允许使用块注释，而应该将每行拆分为多个单行注释（就像现在这些注释这样）
      "starred-block",
    ],

    // 三元表达式的换行方案
    "multiline-ternary": [2,
      // never: 只在一行里表示，不允许多行
      // always: `?`, `:` 都要换行
      // always-multiline: 当单行时整个表达式单行表示，如果要多行，则 `?`, `:` 对应的表达式都要独立成行
      "always-multiline",
    ],

    // 检查 new 操作符后的命名是否为大写字母开头
    "new-cap": [2,
      {
        // 检查所有首字母开头的函数都仅用 new 调用
        "newIsCap": true,
        // 检查所有 new 后跟的函数都是首字母大写的
        "capIsNew": false,
        // 对应的 newIsCap 例外
        "newIsCapExceptions": [],
        // 对应的 capIsNew 例外，默认: Array, Boolean, Date, Error, Function, Number, Object, RegExp, String, Symbol
        "capIsNewExceptions": [],
      },
    ],

    // 使用 new 操作符时，构造函数要带括号
    "new-parens": 2,

    // 链式调用每行一个调用
    "newline-per-chained-call": [2,
      {
        // 如果链式短到 N 个，可以忽略
        "ignoreChainWithDepth": 4,
      },
    ],

    // 不允许使用 Array 构造函数（允许通过数字构造某长度的数组，但不允许传入数组值的方式）
    "no-array-constructor": 2,

    // 不允许使用位运算操作符
    "no-bitwise": 2,

    // 不允许使用 continue，这不是个编程好习惯，建议将不需要 continue 的项放在 if 里
    "no-continue": 2,

    // 不允许在代码行最后加注释
    "no-inline-comments": 0,

    // 不允许在 else 中仅有独立的 if，可改用 else if 语句
    "no-lonely-if": 2,

    // 不允许不同优先级的操作符混用，需要使用括号分隔
    "no-mixed-operators": [2,
      {
        // 每一组的优先级相同
        "groups": [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        // 相同优先级的操作符是否可混用
        "allowSamePrecedence": true,
      },
    ],

    // 不允许在缩进中 <space> 和 <tab> 混用
    "no-mixed-spaces-and-tabs": 2,

    // 不允许连续赋值多个变量，如 `var a = b = 1`
    "no-multi-assign": 2,

    // 不允许连续多个空行
    "no-multiple-empty-lines": [2,
      {
        // 最多可以连续两个空行
        "max": 2,
        // 最多出现多少个 EOF 符号
        "maxEOF": 1,
      },
    ],

    // 不允许在 if/else 里先用否定式
    "no-negated-condition": 2,

    // 不允许嵌套三元运算符，会降低代码可读性
    "no-nested-ternary": 2,

    // 不允许使用构造函数声明对象，直接用字面量
    "no-new-object": 2,

    // 不允许使用 ++/-- 操作符，用 +=/-= 代替
    "no-plusplus": [2,
      {
        // 但允许在 for 循环的表达式中使用
        "allowForLoopAfterthoughts": true,
      },
    ],

    // 不允许某些特殊语法，可以使用字符串表示限制的表达式，也可以使用对象自定义限制出错信息
    "no-restricted-syntax": [2,
      // 不允许使用表达式赋值函数 `var fn = function () {}`
      // 'FunctionExpression',
      // 不允许使用 with
      "WithStatement",
      // 使用特定的语法表示限制
      {
        "selector": "CallExpression[callee.name=\"setTimeout\"][arguments.length!=2]",
        "message": "setTimeout 必须/只能有两个参数",
      },
    ],

    // 在代码及注释中不允许使用 Tab
    "no-tabs": 2,

    // 不允许使用三元运算符 `foo ? bar : baz`，改用 `if/else` 代替
    "no-ternary": 0,

    // 行尾不允许有空格
    // 建议使用 editorconfig 针对编辑器进行配置
    "no-trailing-spaces": [2,
      {
        // 跳过空行
        "skipBlankLines": false,
        // 忽略注释行
        "ignoreComments": false,
      },
    ],

    // 不允许变量头尾使用下划线，因为下划线表示私有，但 JS 并没有私有概念，可能会让代码读者产生歧义
    // 更多相关讨论（争论）：https://github.com/airbnb/javascript/issues/1024
    "no-underscore-dangle": [0,
      {
        // 例外列表
        "allow": [],
        // `this.` 后是否可调用带下划线头尾的方法/变量
        "allowAfterThis": false,
        // `super.` 后是否允许调用带下划线头尾的方法/变量
        "allowAfterSuper": false,
        // 方法名是否可用下划线为头尾命名，之前使用此方法来表示私有方法，现在建议使用 `private` 关键字
        "enforceInMethodNames": false,
      },
    ],

    // 不允许使用不必要的三元表达式，如 `foo = bar ? bar : 1`，可以使用 `foo = bar || 1`
    "no-unneeded-ternary": [2,
      {
        // 默认表达式是否可以使用此方式
        "defaultAssignment": false,
      },
    ],

    // 属性 `.` 前不允许有空格 `foo. bar .baz . quz`，换行对齐不受影响
    "no-whitespace-before-property": 2,

    // if, else, while, do-while, for 后边的语句块如果只有一行时，可以不加大括号，如果不加大括号，如何处理关键字与语句的位置
    "nonblock-statement-body-position": [0,
      // beside: 在关键字后边
      // below: 在关键字下边另起一行
      // any: 任意位置
      "beside",
      // {
      //   // 例外项
      //   "overrides": {
      //     "for": "below",
      //   },
      // },
    ],

    // 对象的大括号内是否要换行，就是在 `{` 后是否要跟换行（不允许单行对象定义）
    "object-curly-newline": [2,
      // 注意，以下三种方式只能选其一

      // 1. 只用 `always` 或 `never` 来表示是否允许换行
      // "never",

      // 2. 用下边的对象形式描述更具体的情况
      {
        // 仅当使用多行来表示对象时才需要（注意并不限制几个 key）
        "multiline": true,
        // 当有指定个 key 时，则必须换行
        // minProperties: 2,
        // 要求 `{}` 的行为一致：当 `{` 后有换行时，`}` 前边也要有换行；或者 `{` 后边和 `}` 前边都没换行
        "consistent": true,
      },

      // 3. 针对 对象表达式（如：foo = {}） 和对象解构（如：{foo} = bar） 分别定义
      // 定义的值，可以是上边描述的字符串形式，也可以是对象形式
      // {
      //   // 针对对象表达式
      //   "ObjectExpression": "always",
      //   // 针对对象解构
      //   "ObjectPattern": {
      //     multiline: true,
      //   },
      //   // import 中涉及的对象形式
      //   "ImportDeclaration": {
      //   },
      //   // export 中涉及的对象形式
      //   "ExportDeclaration": {
      //   },
      // },
    ],

    // 当整个对象在一行时，大括号前后是否要加空格
    "object-curly-spacing": [2,
      // always: 需要空格，此时有个例外，即空对象 `{}` 不要求有空格
      // never: 不需要空格
      "always",
      {
        // 针对嵌套对象的检测，如：`var foo = { bar: {} }` 中最后的 `}` 前是否要有空格
        "objectsInObjects": true,
        // 针对嵌套数组的检测，如：`var foo = { bar: [] }` 中最后的 `}` 前是否要有空格
        "arraysInObjects": true,
      },
    ],

    // 是否允许对象属性在一行
    "object-property-newline": [2,
      {
        // 允许所有属性在同一行，即：要么每个属性一行，要么所有属性在同一行，不允许一行多个还分多行的情况
        "allowAllPropertiesOnSameLine": true,
      },
    ],

    // 在一个函数中，应该仅使用一个 var/const/let 定义变量，还是分别定义
    "one-var": [2,
      // 有以下三种配置项
      // 第一种：使用字符串 always, never 或 consecutive 来表示所有情况
      // always: 仅使用一个定义
      // never: 分别定义
      // consecutive: 可以在多处定义，但是连续的定义要合并成一个
      // 第二种：分别针对 var/const/let 定义，同时可以设置是否要将 require 独立出来
      // {
      //   "let": "never",
      //   "const": "always",
      //   "var": "never",
      //   // 不能将普通变量与 require 混在一起
      //   "separateRequires": true,
      // },
      // 第三种：针对是否初始化情况来区分
      {
        // 用于无初始化值的变量，放在一个声明里
        "uninitialized": "always",
        // 用于有初始化值的变量，每个变量一条声明
        "initialized": "never",
      },
    ],

    // 每行定义一个变量
    "one-var-declaration-per-line": [2,
      // always: 总是检查
      // initializations: 如果对变量赋值时才执行检查
      "initializations",
    ],

    // 缩短操作符，对于 += 等情况，推荐用 `x += y` 还是 `x = x + y`
    "operator-assignment": [2,
      "always",
    ],

    // 操作符前后有换行时，操作符应该在前一行首，还是下一行尾
    "operator-linebreak": [2,
      "before",
      {
        // 需要特殊处理的 case
        "overrides": {
          // "?": "before",
          "+=": "none",
        },
      },
    ],

    // 在语句块 `{}` 前后是否需要一个空行分隔
    "padded-blocks": [2,
      "never",
    ],

    // 在语句前后是否要加空行，此规则较复杂，建议参考官方文档：https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": [0,
      // 可以有多个此类定义，每一项定义一句情况
      // 比如下边这个块，可以翻译为：
      // 当满足以下条件时需要有空行（always），此空行前（prev）随意，空行后（next）是 return 语句（翻译过来有些拗口，用英文的话会更通顺一些）
      { "blankLine": "always", "prev": "*", "next": "return" },
      // 比如下边这两条合起来，翻译为：指令（如 `use strict`, `use asm`）后要加空行，但当有多个指令时，指令间不加
      { "blankLine": "always", "prev": "directive", "next": "*" },
      { "blankLine": "never", "prev": "directive", "next": "directive" },
    ],

    // 对象的属性是否需要引号
    "quote-props": [2,
      // always: 总加引号
      // as-needed: 只在需要的时候加
      // consistent: 所有都加或都不加
      // consistent-as-needed: 如果所有都可以不用引号则不加，否则都加
      "as-needed",
      {
        // 当 as-needed / consistent-as-needed 时，对于 JS 关键词是否需要引号
        "keywords": false,
        // 当 as-needed 时有效，具体要求没太看懂
        "unnecessary": true,
        // 数字是否要加引号
        "numbers": false,
      },
    ],

    // 字符串使用单引号还是双引号
    "quotes": [2,
      // double: 双引号
      // single: 单引号
      // backtick: 反引号
      "single",
      {
        // 当字符串中正好有引号时，可以使用另一个引号包裹，这样可以避免写转义字符
        "avoidEscape": true,
        // 允许使用模板字符串（反引号）当引号用，此时反引号又可以当双引号，又可以当单引号
        "allowTemplateLiterals": false,
      },
    ],

    // 函数是否有符合 JSDoc 格式的注释
    "require-jsdoc": 0,

    // 语句后是否要加分号
    // 这个见仁见智，不要吵架，也不要试图说服别人，让自己的代码符合自己的审美就可以了
    "semi": [2,
      // always: 总是加分号
      // never: 不加分号
      "never",

      // 另外还可以多加一个参数用来配置细节：
      {
        // 【当第一个参数为 always 时，可配置以下细节】

        // 当一行中同一语句块中有多条语句时，是否省略最后一条语句后边的分号，如 `if (foo) { bar(); baz() }`
        // "omitLastInOneLineBlock": true,

        // 【当第一个参数为 never 时，可配置以下细节】

        // 当后一句以 `[`, `(`, `/`, `+`, `-` 开头时，当前行是否加分号
        // 配合 semi-style, no-unexpected-multiline 两条规则，在此种情况下会报错，只要给后一句前加分号就可解决，所以此处不用强制校验
        // any: 任意
        // always: 总是加分号
        // never: 不加分号
        "beforeStatementContinuationChars": "any",
      },
    ],

    // 分号前后是否要加空格
    "semi-spacing": [2,
      {
        "before": false,
        "after": true,
      },
    ],

    // 分号是放在语句前，还是语句后
    // 对于「分号党」，建议选 last，每行结尾加分号
    // 对于「无分号党」，建议选 first，仅当需要分号时，在语句的开头加个分号
    "semi-style": [2,
      // first: 在语句前
      // last: 在语句后
      "first",
    ],

    // 对对象的 key 排序
    "sort-keys": [0,
      // asc: 正序
      // desc: 倒序
      "asc",
      {
        // 大小写敏感
        "caseSensitive": true,
        // 按照自然数排序，如 `1, 10, 2` 还是 `1, 2, 10`
        "natural": true,
      },
    ],

    // 变量定义是否按 ASCII 排序
    "sort-vars": [0,
      {
        // 忽略大小写
        "ignoreCase": true,
      },
    ],

    // 在大括号开始前是否要加空格
    "space-before-blocks": [2,
      {
        // 针对函数体大括号前
        "functions": "always",
        // 针对关键字后的大括号前
        "keywords": "always",
      },
    ],

    // 函数后的小括号前是否要加空格
    "space-before-function-paren": [2,
      // 可以使用字符串 always, never，或者使用一个对象约定更具体的情况
      "always",
      // 如果使用对象，则对象的每一项可以使用 always, never 或 ignore 三项
      // {
      //   // 针对匿名函数，如 `function () {}`
      //   "anonymous": "always",
      //   // 针对具名函数，如 `function foo () {}`
      //   "named": "never",
      //   // 针对 async 箭头函数，如 `async () => {}`
      //   "asyncArrow": "always",
      // },
    ],

    // 小括号内是否要加空格
    "space-in-parens": [2,
      "never",
      {
        // 可用于排除检查的 case
        "exceptions": [],
      },
    ],

    // 在中缀（二元、三元）操作符前后是否要有空格，如 +, -, *, /, >, <, =, ?:
    "space-infix-ops": [2,
      {
        // 是否允许 `var foo = bar|0`
        "int32Hint": true,
      },
    ],

    // 一元操作符前后是否允许加空格
    "space-unary-ops": [2,
      {
        // 像 new, delete, typeof, void, yield 后需要加空格
        "words": true,
        // 非单词类的一元操作符不能加空格，如 -, +, --, ++, !, !!
        "nonwords": false,
        // 例外项，以关键字定义
        // "overrides": {
        // }
      },
    ],

    // 注释最开始是否需要留空格
    "spaced-comment": [2,
      // never: 注释与内容间不加空格
      // always: 注释与内容间加空格
      "always",
      {
        // 针对单行注释
        "line": {
          // markers 表示有此 mark 则排除检查，markers 只能出现在最开始
          "markers": ["=", "!"],
          // 注释中有以下字符出现，则排除检查
          "exceptions": ["-", "+"],
        },
        // 针对块注释
        "block": {
          "markers": ["=", "!"],
          "exceptions": ["-", "+", "*"],
          // 块注释首尾行为一致，即 `/*` 后与 `*/` 前要一致
          "balanced": true,
        },
      },
    ],

    // switch 语句中，`case` 和 `default` 后的冒号前后是否要有空格
    "switch-colon-spacing": [2,
      // 分别指定前与后
      {
        "before": false,
        "after": true,
      },
    ],

    // ES6 标签模板调用时，函数名与模板字符串中间是否要加空格，如 foo`bar` 中 foo 后是否要有空格
    "template-tag-spacing": [2,
      "never",
    ],

    // 是否允许出现 BOM
    "unicode-bom": [2,
      "never",
    ],

    // 是否要包裹正则字面量 `/reg/.test()` -> `(/reg/).test()`
    "wrap-regex": 2,
  },
}
