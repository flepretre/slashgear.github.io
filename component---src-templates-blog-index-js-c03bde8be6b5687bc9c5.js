(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{TshS:function(e,t,r){"use strict";r.r(t),r.d(t,"blogIndexFragment",(function(){return h}));var a=r("q1tI"),n=r.n(a),o=r("Wbzz"),l=r("mwIZ"),i=r.n(l),m=r("TJpk"),c=r.n(m),s=r("6Gk8"),p=r("Bl7J"),u=r("p3AD");var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=i()(this,"props.data.config"),t=i()(this,"props.data.allMarkdownRemark.edges"),r=i()(e,"frontmatter.title"),a=i()(e,"frontmatter.description"),l=i()(e,"html");return n.a.createElement(p.a,{location:this.props.location,config:e},n.a.createElement(c.a,{htmlAttributes:{lang:this.props.pageContext.language},meta:[{name:"description",content:a}],title:r}),n.a.createElement(s.a,null,n.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})),t.map((function(e){var t=e.node,r=i()(t,"frontmatter.title")||t.fields.slug;return n.a.createElement("div",{key:t.fields.slug},n.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},n.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},r)),n.a.createElement("small",null,t.frontmatter.date),n.a.createElement("small",{style:{margin:"0 1rem"}},n.a.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),t.timeToRead," min"),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}),t.frontmatter.hero&&n.a.createElement("picture",null,n.a.createElement("source",{srcSet:t.frontmatter.hero.childImageSharp.fluid.srcSetWebp,sizes:"30vw",type:"image/webp"}),n.a.createElement("source",{srcSet:t.frontmatter.hero.childImageSharp.fluid.srcSet,sizes:"30vw",type:"image/png"}),n.a.createElement("img",{className:"article-item__picture",src:t.frontmatter.hero.childImageSharp.fluid.src,alt:t.frontmatter.title,width:"100%"})))})))},a}(n.a.Component);t.default=d;var h="3470152284"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-c03bde8be6b5687bc9c5.js.map