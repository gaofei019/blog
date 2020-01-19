(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{280:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"浅谈vue3-0和vue2-0的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浅谈vue3-0和vue2-0的区别"}},[t._v("#")]),t._v(" 浅谈vue3.0和vue2.0的区别")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://p3.pstatp.com/large/pgc-image/6a31b68c153340e3aebbb43655fd5490",alt:"center-img"}})]),t._v(" "),s("p",[t._v("进入2020年，离vue3.0正式版发布的时间越来越近了。今天，借助尤雨溪大大提前发布的vue3.0源码，老K为大家整理一下vue3.0和vue2.0的区别。")]),t._v(" "),s("p",[t._v("vue3的变化可以总结为以下几点：")]),t._v(" "),s("ul",[s("li",[t._v("更小")]),t._v(" "),s("li",[t._v("更快")]),t._v(" "),s("li",[t._v("加强typescript支持")]),t._v(" "),s("li",[t._v("Api一致性")]),t._v(" "),s("li",[t._v("提高可维护能力")]),t._v(" "),s("li",[t._v("开放更多底层功能")])]),t._v(" "),s("p",[t._v("其中前三点是最主要的变化。")]),t._v(" "),s("h3",{attrs:{id:"更小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更小"}},[t._v("#")]),t._v(" 更小")]),t._v(" "),s("p",[t._v("vue2采用面向对象编程的思想，vue3则采用函数式编程的思想。")]),t._v(" "),s("p",[t._v("vue2源码中代码是这样组织的：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \nvue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("vue3源码中是这样组织的：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听方法：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//渲染方法：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("原因：充分利用函数式编程组合大于继承的优势，采用函数式编程更利于逻辑功能的复用，webpack打包时更有利于tree-shaking，更利于代码的压缩，更利于返回值类型校验，压缩后的文件体积更小。")]),t._v(" "),s("h3",{attrs:{id:"更快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更快"}},[t._v("#")]),t._v(" 更快")]),t._v(" "),s("p",[t._v("vue3修改了虚拟dom的算法（即diff算法 - 比对虚拟dom有没有变化）。")]),t._v(" "),s("p",[t._v("vue2需要diff所有的虚拟dom节点，而vue3参考了SVELTE框架的思想，先分层次-然后找不变化的层-针对变化的层进行diff，更新速度不会再受template大小的影响，而是仅由可变的内容决定。经过尤雨溪自己的测试，大概有6倍的速度提升。")]),t._v(" "),s("h3",{attrs:{id:"加强typescript支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加强typescript支持"}},[t._v("#")]),t._v(" 加强typescript支持")]),t._v(" "),s("p",[t._v("vue3的源码开始采用了ts进行编写，给开发者也提供了支持ts的开发模式。")]),t._v(" "),s("h3",{attrs:{id:"api一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api一致性"}},[t._v("#")]),t._v(" Api一致性")]),t._v(" "),s("p",[t._v("vue3最开始的版本可以完美兼容vue2的api。")]),t._v(" "),s("h3",{attrs:{id:"提高可维护能力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提高可维护能力"}},[t._v("#")]),t._v(" 提高可维护能力")]),t._v(" "),s("p",[t._v("从源码的层面上提供了更多的可维护能力。")]),t._v(" "),s("h3",{attrs:{id:"开放更多底层功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开放更多底层功能"}},[t._v("#")]),t._v(" 开放更多底层功能")]),t._v(" "),s("p",[t._v("把更多的底层功能开放出来，比如render、依赖收集功能，我们可以更好的进行自定义化开发，可以写更多的高阶组件。")]),t._v(" "),s("p",[t._v("最后我们再谈谈两者在数据双向绑定方面的区别。")]),t._v(" "),s("h3",{attrs:{id:"数据双向绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据双向绑定"}},[t._v("#")]),t._v(" 数据双向绑定")]),t._v(" "),s("p",[t._v("关于数据双向绑定的实现，vue2 采用了defineProperty，而vue3则采用了proxy。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[t._v("使用proxy不污染源对象，会返回一个新对象，defineProperty是注入型的，会破坏源对象")]),t._v(" "),s("li",[t._v("使用proxy只需要监听整个源对象的属性，不需要循环使用Object.defineProperty监听对象的属性")]),t._v(" "),s("li",[t._v("使用proxy可以获取到对象属性的更多参数，使用defineProperty只能获取到监听属性的新值newvalue")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* vue2.0*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("444")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newvalue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i am be set'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只能获取到newvalue这个参数")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* vue3.0 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("444")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newa "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("newvalue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("newvalue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以获取到target,key,newvalue三个参数")]),t._v("\n")])])]),s("p",[t._v("希望整理的这些内容对大家有所帮助。最后老K提前祝大家春节快乐！！！😄😄😄")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://p1.pstatp.com/large/pgc-image/b72566a275a4406fb91f0cc35c3c0d10",alt:"center-img"}})]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("本文为原创内容，若转载请注明出处，转发感激不尽。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://p1.pstatp.com/large/pgc-image/d1d0f956387e4884abe52b3a75ddfd33",alt:"center-img"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);