(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{433:function(a,e,s){"use strict";s.r(e);var t=s(63),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux三剑客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux三剑客"}},[a._v("#")]),a._v(" Linux三剑客")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("为什么使用三剑客？")]),a._v(" "),s("ul",[s("li",[a._v("文本操作和数据处理，Linux有自己的法宝，称之为三剑客：grep，awk 和 sed")]),a._v(" "),s("li",[a._v("你可以用这三件法宝很方便的处理数据 ：查找，分段，修改，而这三个功能对应着我们今天的主角：grep，awk，sed")])])]),a._v(" "),s("li",[s("p",[a._v("grep：数据定位查找")]),a._v(" "),s("ul",[s("li",[a._v("grep 是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("curl https://testerhome.com | grep -o 'http://[a-zA-Z0-9\\.\\-]*'\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|-A n|追加显示结果行后面 n 行|\n|-B n|追加显示结果行前面 n 行|\n|-C n|追加显示结果行前后 n 行，默认 -C 2，表示 -A 2 -B 2|\n|-c, --count|显示搜索结果数量|\n|-o|只打印匹配结果部分|\n|-E|使用扩展版正则表达式匹配，相当于执行 egrep\t|\n|-F|使用静态字符串匹配，相当于执行 fgrep|\n|-z|先解包再搜索，相当于执行 zgrep|\n|-e pattern|表示后续字符串为目标正则表达式，主要用于同时使用多个 -e 匹配多个模式，也用于正则表达式开头为 - 的场合（消除歧义）|\n|-v|反向搜索，打印不匹配搜索模式的结果|\n|-q,--quiet,--silent|非贪婪式搜索，搜到一个结果时停止继续搜索该文件|\n|--exclude,--exclude-dir pattern|排除非目标搜索文件或目录，高优先级|\n|--include,--include-dir pattern|仅搜索目标文件或目录，低优先级|\n|-f file|指定搜索某个文件|\n|-H,-h|打印、不打印文件名|\n|-n|显示行号，从 1 开始|\n|-I|忽略二进制文件|\n|-i|忽略大小写，默认大小写敏感|\n|-L|仅列出打印不含目标搜索结果的文件|\n|-l|仅列出打印包含目标搜索结果的文件|\n|-m n|仅显示前 n 个结果|\n|-R|递归扫描子文件夹|\n|-S|递归扫描时，追踪扫描符号链接文件、目录，默认不追踪（等同于指定 -p）|\n|-s|静默模式，忽略错误文件|\n|-w,-x|正则模式作为单个完整单词、完整行进行搜索|\n")])])]),s("ul",[s("li",[a._v("除此之外，如果你想查看更多有关 grep 的内容，可以用：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("grep --help\n")])])])]),a._v(" "),s("li",[s("p",[a._v("awk：数据切片")]),a._v(" "),s("ul",[s("li",[a._v("如果为三剑客排个地位，那么 awk 绝对是 老大，他甚至可以代替 grep，awk 不光支持正则，还可以对字段进行分段处理")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("echo $PATH | awk 'BEGIN{RS=\":\"}{print $0}' | awk -F/ '{print $1,$2}'\n")])])]),s("ul",[s("li",[a._v("其中 RS 的意思是用:作为记录分割符，将上面的内容分行")]),a._v(" "),s("li",[a._v("BEGIN 的意思是 初始化代码块，在对每一行进行处理之前，先执行 BEGIN 中的内容")]),a._v(" "),s("li",[a._v("符号 / 太累赘，于是用 awk 去掉这个拦路虎 awk-F/'{print $1,$2}' 命令用 -F/表示用 / 作为分隔符， $1 和 $2 表示提取每行前 2 个内容")]),a._v(" "),s("li",[a._v("有的同学很迷惑，为啥每行只提取出一个字符（usr），而不是两个（usr locl），这是因为 $1 是指 / 前的字符 ，比如 /usr/local/sbin，第一个 / 前是空白，第二个 /前是 usr，因此打印只显示了 空白 usr")]),a._v(" "),s("li",[a._v("其实参数 FS与 F的使用相同，上面的剑客也可以这么用：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("echo $PATH | awk 'BEGIN{RS=\":\"}{print $0}' | awk 'BEGIN{FS=\"/\"}{print $1,$2}'\n")])])]),s("ul",[s("li",[a._v("awk 的语法是这样的：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("awk [-F|-f|-v] ‘BEGIN{} //{command1; command2} END{}’ file\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|选项|解释|\n|[-F|-f|-v]|-F 指定分隔符，-f 调用脚本，-v 定义变量 var=value|\n|' '|引用代码块|\n|BEGIN|初始化代码块，在对每一行进行处理之前，初始化代码，主要是引用全局变量，设置 FS 分隔符|\n|//|匹配代码块，可以是字符串或正则表达式|\n|{}|命令代码块，包含一条或多条命令\t|\n|；|多条命令使用分号分隔|\n|END|结尾代码块，在对每一行进行处理之后再执行的代码块，主要是进行最终计算或输出结尾摘要信息|\n")])])]),s("ul",[s("li",[a._v("其他命令解释")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|$0|表示整个当前行|\n|$1|每行第一个字段|\n|NF|字段数量变量|\n|NR|每行的记录号，多文件记录递增|\n|FNR|与 NR 类似，不过多文件记录不递增，每个文件都从 1 开始|\n|\\t|制表符|\n|\\n|换行符|\n|FS|BEGIN 时定义分隔符|\n|RS|输入的记录分隔符， 默认为换行符 (即文本是按一行一行输入)|\n|~|匹配，与 == 相比不是精确比较|\n|!~|不匹配，不精确比较|\n|==|等于，必须全部相等，精确比较|\n|!=|不等于，精确比较|\n|&&|逻辑与|\n|||逻辑或|\n|+|匹配时表示 1 个或 1 个以上|\n|/[0-9][0-9]+/|两个或两个以上数字|\n|/[0-9][0-9]*/|一个或一个以上数字|\n|FILENAME|文件名|\n|OFS|输出字段分隔符， 默认也是空格，可以改为制表符等|\n|ORS|输出的记录分隔符，默认为换行符 , 即处理结果也是一行一行输出到屏幕|\n|-F'[:#/]'|定义三个分隔符|\n")])])]),s("ul",[s("li",[a._v("除此之外，如果你想查看更多有关 awk 的内容，可以用：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("awk --help\n")])])]),s("ul",[s("li",[a._v("拓展阅读：RS、ORS、FS、OFS 的区别和联系，参考"),s("a",{attrs:{href:""}},[a._v("https://www.jb51.net/article/52891.htm")])])])]),a._v(" "),s("li",[s("p",[a._v("sed：数据修改")]),a._v(" "),s("ul",[s("li",[a._v("严格来说：sed 是一种流编辑器，它是文本处理中非常有用的工具，能够完美的配合正则表达式使用，功能不同凡响。")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("echo $PATH | awk 'BEGIN{RS=\":\"}{print $0}' | sed 's#/ #----#g'\n")])])]),s("ul",[s("li",[a._v("将 / 替换成 ---- sed's#/ #----#g'。")]),a._v(" "),s("li",[a._v("其中的 s 表示进行替换，注意到其后有三个#，# 之间的内容分别是要替换的内容 /，替换成什么 ----")]),a._v(" "),s("li",[a._v("sed 的命令格式如下：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sed [options] 'command' file(s)\nsed [options] -f scriptfile file(s)\n")])])]),s("ul",[s("li",[a._v("选项")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|参数|完整参数|说明|\n|-e|script --expression=script|以选项中的指定的 script 来处理输入的文本文件|\n|-f|script --files=script|以选项中的指定的 script 文件来处理输入的文本文件|\n|-h|--help|显示帮助|\n|-n|--quiet --silent|仅显示 script 处理后的结果|\n|-V|--version|显示版本信息|\n")])])]),s("ul",[s("li",[a._v("命令")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|命令|说明|\n|d|删除，删除选择的行|\n|D|删除模板块的第一行|\n|s|替换指定字符|\n|h|拷贝模板块的内容到内存中的缓冲区|\n|H|追加模板块的内容到内存中的缓冲区|\n|g|获得内存缓冲区的内容，并替代当前模板块中文本|\n|G|获得内存缓冲区的内容，并追加到当前模板块文本的后面|\n|l|列表不能打印字符的清单|\n|n|读取下一个输入行，用下一个命令处理新的行而不是第一个命令|\n|N|追加下一个输入行到模板块后面并在二者间嵌入一个新行，改变当前行号码|\n|p|打印模板块的行|\n|P|打印模板块的第一行|\n|q|退出 sed|\n|b label|分支到脚本中带有标记的地方，如果分支不存在则分支到脚本的末尾|\n|r file\t|从 file 中读行|\n|t label|if 分支，从最后一行开始，条件一旦满足或者 T，t 命令，将导致分支到带有标号的命令处，或者到脚本的末尾|\n|T label|错误分支，从最后一行开始，一旦发生错误或者 T，t 命令，将导致分支到带有标号的命令处，或者到脚本的末尾|\n|w file\t|写并追加模板块到 file 末尾|\n|W file\t|写并追加模板块的第一行到 file 末尾|\n|!|表示后面的命令对所有没有被选定的行发生作用|\n|=|打印当前行号\t|\n|#|把注释扩展到第一个换行符以前|\n")])])]),s("ul",[s("li",[a._v("替换")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|命令|说明|\n|g|表示行内全面替换|\n|p|表示打印行|\n|w|表示把行写入一个文件|\n|x|表示互换模板块中的文本和缓冲区中的文本|\n|y|表示把一个字符翻译为另外的字符（但是不用于正则表达式）|\n|\\1|子串匹配标记|\n|&|已匹配字符串标记|\n")])])]),s("ul",[s("li",[s("p",[a._v("扩展：")])]),a._v(" "),s("li",[s("p",[a._v("sed 处理数据时，把当前处理的行存储在临时缓冲区中，称为『模式空间』（pattern space），接着用 sed 命令处理 缓冲区 中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。文件内容并没有改变，除非你使用重定向存储输出。sed 主要用来自动编辑一个或多个文件，简化对文件的反复操作，编写转换程序等。")])]),a._v(" "),s("li",[s("p",[a._v("除此之外，如果你想查看更多有关 awk 的内容，可以用：")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("awk --help\n")])])])])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"sidebardepth-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebardepth-6"}},[a._v("#")]),a._v(" sidebarDepth: 6")])])}),[],!1,null,null,null);e.default=n.exports}}]);