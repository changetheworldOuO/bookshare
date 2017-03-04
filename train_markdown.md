
我们坚信写作写的是内容，所思所想，而不是花样格式。
# 简单语法
### 1，标题
是每篇文章都需要也是最常用的格式，在 Markdown 中，如果一段文字被定义为标题，只要在这段文字前加 # 号即可。
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

### 2， 列表
熟悉 HTML 的同学肯定知道有序列表与无序列表的区别，在 Markdown 下，列表的显示只需要在文字前加上 - 或 * 即可变为无序列表，有序列表则直接在文字前加1. 2. 3. 符号要和文字之间加上一个字符的空格。
无序列表使用星号、加号或是减号作为列表标记：
*   Red
*   Green
*   Blue

等同于：
+   Red
+   Green
+   Blue

也等同于：
-   Red
-   Green
-   Blue
有序列表则使用数字接着一个英文句点：

1.  Bird
2.  McHale
3.  Parish
很重要的一点是，你在列表标记上使用的数字并不会影响输出的 HTML 结果，上面的列表所产生的 HTML 标记为：
<ol>
<li>Bird</li>
<li>McHale</li>
<li>Parish</li>
</ol>
如果你的列表标记写成：

1.  Bird
1.  McHale
1.  Parish
或甚至是：

3. Bird
1. McHale
8. Parish
你都会得到完全相同的 HTML 输出。重点在于，你可以让 Markdown 文件的列表数字和输出的结果相同，或是你懒一点，你可以完全不用在意数字的正确性。

如果你使用懒惰的写法，建议第一个项目最好还是从 1. 开始，因为 Markdown 未来可能会支持有序列表的 start 属性。

列表项目标记通常是放在最左边，但是其实也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。

要让列表看起来更漂亮，你可以把内容用固定的缩进整理好：

*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.

换句话说，也就是在行首出现数字-句点-空白，要避免这样的状况，你可以在句点前面加上反斜杠。

1986\. What a great season.

### 3， 引用
只需要在文本前加入 > 这种尖括号（大于号）即可，注意符号与文本之间的间隔,引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等：
> ## 这是一个标题。
> 
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
> 
> 给出一些例子代码：
> 
>     return shell_exec("echo $input | $markdown_script");

### 4， 图片与链接
插入链接与插入图片的语法很像，区别在一个 !号
图片为：![](){ImgCap}{/ImgCap}

![SAO](http://wx4.sinaimg.cn/mw690/006xRFa6gy1fd43b4m2f7j30rl0e1dwc.jpg){}{}

链接为：[]()
插入图片的地址需要图床，这里推荐围脖图床修复计划 与 CloudApp 的服务，生成URL地址即可。
Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。
不管是哪一种，链接文字都是用 [方括号] 来标记。

要建立一个行内式的链接，只要在方块括号后面紧接着圆括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如：

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
会产生：

<p>This is <a href="http://example.com/" title="Title">
an example</a> inline link.</p>

<p><a href="http://example.net/">This link</a> has no
title attribute.</p>
如果你是要链接到同样主机的资源，你可以使用相对路径：

See my [About](/about/) page for details.
参考式的链接是在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记：

This is [an example][id] reference-style link.
你也可以选择性地在两个方括号中间加上一个空格：

This is [an example] [id] reference-style link.
接着，在文件的任意处，你可以把这个标记的链接内容定义出来：

[id]: http://example.com/  "Optional Title Here"
链接内容定义的形式为：

方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字
接着一个冒号
接着一个以上的空格或制表符
接着链接的网址
选择性地接着 title 内容，可以用单引号、双引号或是括弧包着
下面这三种链接的定义都是相同：

[foo]: http://example.com/  "Optional Title Here"
[foo]: http://example.com/  'Optional Title Here'
[foo]: http://example.com/  (Optional Title Here)
如果改成用链接名称的方式写：

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

  [google]: http://google.com/        "Google"
  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
  [msn]:    http://search.msn.com/    "MSN Search"
  
  
详细叙述如下：

一个惊叹号 !
接着一个方括号，里面放上图片的替代文字
接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的 'title' 文字。
参考式的图片语法则长得像这样：
![Alt text][id]

「id」是图片参考的名称，图片参考的定义方式则和连结参考一样：

[id]: url/to/image  "Optional title attribute"

### 5， 粗体与斜体
Markdown 的粗体和斜体也非常简单，用两个 * 包含一段文本就是粗体的语法，用一个 * 包含一段文本就是斜体的语法。
例如：这里是粗体 这里是斜体
  
  un*frigging*believable


Markdown 使用星号（*）和底线（_）作为标记强调字词的符号，被 * 或 _ 包围的字词会被转成用 <em> 标签包围，用两个 * 或 _ 包起来的话，则会被转成 <strong>，例如：
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__


### 6，表格
表格是我觉得 Markdown 比较累人的地方，例子如下：

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

这种语法生成的表格如下：
还不如直接
<table>
    <tr>
        <td>Foo</td>
        <td>haha</td>
    </tr>
</table>

### 7， 代码框
如果你是个程序猿，需要在文章里优雅的引用代码框，在 Markdown下实现也非常简单，只需要用两个 ` 把中间的代码包裹起来。图例：

Use the `printf()` function.

使用 tab 键即可缩进。

### 8，分割线
分割线的语法只需要三个 * 号，你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
* * *
***
*****
---
---------------------------------------

### 9， 强制换行
按两个空格，然后回车

### 10，反斜杠转换显示普通的符号：

Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

\   反斜线
`   反引号
*   星号
_   底线
{}  花括号
[]  方括号
()  括弧
\#   井字号
+   加号
-   减号
.   英文句点
!   惊叹号

1. 一开始，先记住 `# 这是标题`、`## 这是二级标题`、`### 这是三级标题`这时候你写一般小文章会开始感觉 MD 不错。
2. 然后，你发现标题不适合做列表，记住了用`1. 第一点`、`- 这一点`来列表超级方便
3.  好吧，写知乎答案总要有些重点吧，`**加粗**`、`*斜体*`、`~~删除线~~`开始派上用场了。这时你基本不会打开 Word 那样的笨重软件了。
4. 如果你不幸是码农：   `\`这是单行代码\``//这是代码段，四个空格或一个制表符缩进        
        int i;   
     > 这是引用
5. 你越来越喜欢，自然会去查查维基（Markdown）还有什么语法，加上多用，很快就基本掌握了。MD 还有表格、锚、注脚、贴图等。强烈推荐 Mou，按 ⌘＋R 可以快速查看语法。
6. 慢慢，你会发现，总有小「bugs」，如列表内无法内嵌代码段。上网查查，你开始理解 MD 的缩进内嵌机制等高级隐形内容，这样你就 Master 了！


作者：石夏星
链接：https://www.zhihu.com/question/20409634/answer/16177281
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


常用的几个语法：
1. **大标题小标题**：几个#号几级标题。如一个井号是一级标题，四个井号是四级标题。
2. **加粗和斜体**：几对*号斜粗体。一对星号是斜体，两对星号是加粗。
3. **引用别人的话**：一个>号变引用。即可呈现出灰色底色引用的效果。
4. **引用链接**：方括号里超链接。[需要引用的话][标识码]然后把标识码对应的链接附在文后：[标识码]：http://... 或者[需要引用的话]后面紧跟括号，括号里是对应的链接
5. **插入表格**：|号表示分割线。表格从此想怎么画怎么画。
6. **缩进黑点对齐**：一个*号点缩进。呈现黑点引导的对齐效果。
7. **缩进数字对齐**：数字圆点数缩进。呈现数字引导的对齐效果
8. **插入高亮代码**：三个`号插代码。插入一段高亮代码。
9. **插入分隔线**：三个*号分隔线。分隔线就是这么简单。

作者：袁晓辉
链接：https://www.zhihu.com/question/20409634/answer/40548752
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




