(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7942:function(e,t,n){"use strict";var i=n(3038);var o,r=(o=n(7294))&&o.__esModule?o:{default:o},a=n(4957),s=n(9898),d=n(639);var p={};function l(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}},639:function(e,t,n){"use strict";var i=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,d=o.useRef(),p=o.useState(!1),l=i(p,2),m=l[0],c=l[1],u=o.useCallback((function(e){d.current&&(d.current(),d.current=void 0),n||m||e&&e.tagName&&(d.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:i}),n}(n),o=i.id,r=i.observer,a=i.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),s.delete(o))}}(e,(function(e){return e&&c(e)}),{rootMargin:t}))}),[n,t,m]);return o.useEffect((function(){if(!a&&!m){var e=r.requestIdleCallback((function(){return c(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[m]),[u,m]};var o=n(7294),r=n(6286),a="undefined"!==typeof IntersectionObserver;var s=new Map},4423:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});n(7294);var i=n(7379),o=i.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-2x6qys-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),r=i.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-2x6qys-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),a=(i.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-2x6qys-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-2x6qys-3"})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:",";margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),s=(i.default.p.withConfig({displayName:"GlobalComponents__SectionSubText",componentId:"sc-2x6qys-4"})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ","{max-width:672px;font-size:16px;line-height:25px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.button.withConfig({displayName:"GlobalComponents__SecondaryBtn",componentId:"sc-2x6qys-5"})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ","{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-2x6qys-6"})(["width:",";height:",";border-radius:50px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#fff;background:",";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"150px":"262px"}),(function(e){return e.alt?"52px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var t=e.alt,n=e.form;return t||n?"0":"0 0 80px"}),(function(e){return e.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"})),i.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-2x6qys-7"})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:",";opacity:",";transition:.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"GlobalComponents__LinkContainer",componentId:"sc-2x6qys-8"})(["margin-left:",";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ","{margin-left:",";}@media ","{margin-left:",";}"],(function(e){return e.large?"24px":"16px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.large?"16px":"8px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"0":"8px"})),i.default.div.withConfig({displayName:"GlobalComponents__LinkIconImg",componentId:"sc-2x6qys-9"})(["display:flex;height:",";@media ","{height:",";}@media ","{height:",";}"],(function(e){return e.large?"32px":"24px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.nav?"16px":"24px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"32px":"16px"})),i.default.div.withConfig({displayName:"AcomplishmentsStyles__Boxes",componentId:"sc-1e0wjia-0"})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ","{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ","{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"AcomplishmentsStyles__Box",componentId:"sc-1e0wjia-1"})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ","{height:210px;}@media ","{height:135px;padding:16px;}@media ","{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.h5.withConfig({displayName:"AcomplishmentsStyles__BoxNum",componentId:"sc-1e0wjia-2"})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:28px;line-height:32px;}@media ","{font-size:24px;line-height:26px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.p.withConfig({displayName:"AcomplishmentsStyles__BoxText",componentId:"sc-1e0wjia-3"})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:20px;};@media ","{font-size:10px;line-height:14px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"AcomplishmentsStyles__Join",componentId:"sc-1e0wjia-4"})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ","{display:flex;justify-content:center;padding-bottom:64px;}@media ","{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.h5.withConfig({displayName:"AcomplishmentsStyles__JoinText",componentId:"sc-1e0wjia-5"})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ","{line-height:32px;font-size:20px;};@media ","{font-size:16px;line-height:24px;margin:0 0 16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"AcomplishmentsStyles__IconContainer",componentId:"sc-1e0wjia-6"})(["display:flex;@media ","{width:160px;justify-content:space-between;}"],(function(e){return e.theme.breakpoints.sm})),n(5893)),d=(i.default.div.withConfig({displayName:"HeroStyles__LeftSection",componentId:"ko77uq-0"})(["width:100%;@media ","{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ","{width:100%;display:flex;flex-direction:column;margin:0 auto;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),function(e){return(0,s.jsx)("div",{})}),p=i.default.img.withConfig({displayName:"ProjectsStyles__Img",componentId:"sc-1fp8520-0"})(["width:300px;height:250px;object-fit:cover;overflow:hidden;"]),l=i.default.section.withConfig({displayName:"ProjectsStyles__GridContainer",componentId:"sc-1fp8520-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ","{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"],(function(e){return e.theme.breakpoints.sm})),m=i.default.div.withConfig({displayName:"ProjectsStyles__BlogCard",componentId:"sc-1fp8520-2"})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.2);text-align:center;width:400px;@media ","{width:100%;}"],(function(e){return e.theme.breakpoints.sm})),c=i.default.div.withConfig({displayName:"ProjectsStyles__TitleContent",componentId:"sc-1fp8520-3"})(["text-align:center;z-index:20;width:100%;"]),u=i.default.h3.withConfig({displayName:"ProjectsStyles__HeaderThree",componentId:"sc-1fp8520-4"})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:",";"],(function(e){return e.title?"3rem":"2rem"})),f=i.default.hr.withConfig({displayName:"ProjectsStyles__Hr",componentId:"sc-1fp8520-5"})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]),h=(i.default.div.withConfig({displayName:"ProjectsStyles__Intro",componentId:"sc-1fp8520-6"})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]),i.default.p.withConfig({displayName:"ProjectsStyles__CardInfo",componentId:"sc-1fp8520-7"})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ","{padding:.3rem}"],(function(e){return e.theme.breakpoints.sm}))),x=i.default.ul.withConfig({displayName:"ProjectsStyles__UtilityList",componentId:"sc-1fp8520-8"})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]),g=i.default.a.withConfig({displayName:"ProjectsStyles__ExternalLinks",componentId:"sc-1fp8520-9"})(["color:#FFFFFF;font-size:1.6rem;padding:1rem 1.5rem;background-color:#fff;background:",";border-radius:15px;transition:0.5s;&:hover{background:#494EE3;}"],(function(e){return e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"})),b=i.default.ul.withConfig({displayName:"ProjectsStyles__TagList",componentId:"sc-1fp8520-10"})(["display:flex;justify-content:space-around;padding:2rem;"]),y=i.default.li.withConfig({displayName:"ProjectsStyles__Tag",componentId:"sc-1fp8520-11"})(["color:#FFFFFF;font-size:1.5rem;"]),w=[{title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales sodales congue. Vestibulum tempor dolor quis orci vestibulum maximus aliquam at lacus. Vestibulum lectus purus, molestie at mi nec, ullamcorper bibendum ligula..",image:"https://lh3.googleusercontent.com/83PqP10w5_84lDTxCTbCWvGwnr4jPybbNe_6NeAqh18OLXfWHnqb6IO0mEpByBLfCPLukLZHa57KF9cKDJYsYuOMZR-gVrEuI-HgzLtHRyznqPyyPkOppOtgJaTLnb6hCakvzBDxfVZLVUbkizCU_HNjsvmPo4WeV9BspFrCaicyre4H4ao1UjWREVvWTmPwtmmXY9RcQZAJ4-h3K7RK2tJdgq2wTxv76QF5JbeJsGduFeABRRVGyZEr0hh029qWUCnNb8bcIQ4RHSy2dLtKlY1JRGHrKKlCc5NSlACqhZccA-C97IaG8-4MnmiDMem8domVHP8a0S9XvqpFNthmy9FrkdspbMHU6P21_Lu3tgNsGm4vqJcMsrYCvENmBPaJoI124VcV0TWlMGwheFvL1bdmNufYs-sqXvs6KcQ6HNj0Cwy8ioBNlskNL4-63jHEHJXIuJagKCSKHKObq5UxvymVB9JoBike6QG5AhESXkPbOkxNrtBHRzyNanMDk0HtasJUYgtSuDEjp69Q4MWjKZFb95gE4LihA_P5uPFboLj68KDw-7T9Eb6BlsWL9Pu4E9rI6UqhG0pqz-iipZlfLY2MhmGsh66iCq0KSHuD_EOYDhrCYIQesRmxkv_aHpFlmWHtz1-OidwhO3KbteXDrLqey4K0dUvC2TdXx0md1wS4C3KQFcaKA14k4H6op3urIFo2pUyTM3zcaZya_rLyyuY_=w221-h228-no?authuser=0",tags:["SQL","React","Node"],source:"https://google.com",visit:"https://google.com",id:0},{title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales sodales congue. Vestibulum tempor dolor quis orci vestibulum maximus aliquam at lacus. Vestibulum lectus purus, molestie at mi nec, ullamcorper bibendum ligula.",image:"https://lh3.googleusercontent.com/4Ux-H7mmWC4th_EUDWO8yFTSWQ-yt24PpI5G0VG-1nzwyTgkezbPuHJkHPGVI0UZClGPk41Hd_d-K4E4WYXeY1lkw_8wIgoYX5wPFhaZMzypNLPb4XtW11_JWzwuSX_ofwMUs0MPLMZttbKFfAqbDhgucr21XVZDzJQHanO_SNXzIUwltR07_OPCr2A-Ligz28HGb56srO7WUF94mNWPw8U12mKjhKrOPW0Ov8V_3iFKdDW3Ji1iC661rmqi2HgbmY0W0wH9CgtzE64-SvxqALpi6EnJm7Sv8dWfmqt79AmAGS5dzw71g22YhPzjocGLk3cJKvYzpn9BEFEivyFSFnRAxacf9wcSsG3djnHOIpkCGnbBwf_XgH3P-Ijw9c_CyFFPJ9-qWsMncD92XMh5fnLxcagiFkT1p656u9VWNNiZvR_XXBeRk6Wyu9Dd1nXn24mMV4YxjBqV8WOJaIR6OiYVgINNcYlSBbNnfKzwwowAnI-c9JTneXPI9HfsDWaesH3lqbq4m29AjNaOvZWKGIYUP852UlK2ueF43EypR4vUsm6MOl7WQi1G-vVTnXHF8vpkKIBrnN2Jh8oB7fIFHkG1LYm3GxeU_RJwrevSEnMCaK_2PM-xBE7k4UfNkbuUEDOUztMyGLYf1_eU3ADOk7hzImm-GjsC-tLs2rNUvJJM4Rw3a4eX5g0m7YtauMzc0fOVbFRTlR2YcF-j2xiqThiB=w236-h214-no?authuser=0",tags:["SQL","Python","Spark"],source:"https://google.com",visit:"https://google.com",id:1}],k=function(){return(0,s.jsx)("div",{children:(0,s.jsxs)(o,{nopadding:!0,id:"projects",children:[(0,s.jsx)(r,{main:!0,children:"Projects"}),(0,s.jsx)(l,{children:w.map((function(e){var t=e.id,n=e.image,i=e.title,o=e.description,r=e.tags,a=e.source,d=e.visit;return(0,s.jsxs)(m,{children:[(0,s.jsx)(p,{src:n}),(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{title:!0,children:i}),(0,s.jsx)(f,{})]}),(0,s.jsx)(h,{children:o}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c,{children:"Stack"}),(0,s.jsx)(b,{children:r.map((function(e,t){return(0,s.jsx)(y,{children:e},t)}))})]}),(0,s.jsxs)(x,{children:[(0,s.jsx)(g,{href:d,children:"Code"}),(0,s.jsx)(g,{href:a,children:"Source"})]})]},t)}))})]})})},_=(i.default.div.withConfig({displayName:"TechnologiesStyles__ImageContainer",componentId:"sc-1uup9zl-0"})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ","{background-image:none;padding:0;margin-top:40px;}@media ","{background-image:none;padding:0;margin-top:16px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md})),i.default.img.withConfig({displayName:"TechnologiesStyles__MainImage",componentId:"sc-1uup9zl-1"})(["width:100%;"]),i.default.ul.withConfig({displayName:"TechnologiesStyles__List",componentId:"sc-1uup9zl-2"})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ","{margin:64px 0;}@media ","{margin:64px 0;gap:24px}@media ","{display:flex;flex-direction:column;margin:32px 0;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),v=i.default.div.withConfig({displayName:"TechnologiesStyles__ListContainer",componentId:"sc-1uup9zl-3"})(["display:flex;flex-direction:column;@media ","{display:flex;margin-left:18px;}"],(function(e){return e.theme.breakpoints.sm})),C=i.default.h4.withConfig({displayName:"TechnologiesStyles__ListTitle",componentId:"sc-1uup9zl-4"})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:24px;line-height:28px;}@media ","{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),j=i.default.p.withConfig({displayName:"TechnologiesStyles__ListParagraph",componentId:"sc-1uup9zl-5"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),I=i.default.li.withConfig({displayName:"TechnologiesStyles__ListItem",componentId:"sc-1uup9zl-6"})(["max-width:320px;display:flex;flex-direction:column;@media ","{max-width:203px;}@media ","{margin-bottom:14px;max-width:320px;flex-direction:row;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),N=(i.default.img.withConfig({displayName:"TechnologiesStyles__ListIcon",componentId:"sc-1uup9zl-7"})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ","{width:40px;height:40px;margin-bottom:8px;}@media ","{width:32px;height:32px;margin-bottom:0px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),function(){return(0,s.jsx)("div",{children:(0,s.jsxs)(o,{nopadding:!0,id:"technologies",children:[(0,s.jsx)(a,{}),(0,s.jsx)(r,{main:!0,children:"Skills"}),(0,s.jsxs)(_,{children:[(0,s.jsx)(I,{children:(0,s.jsxs)(v,{children:[(0,s.jsx)(C,{children:"Data Science"}),(0,s.jsx)(j,{children:"-Python"}),(0,s.jsx)(j,{children:"-SQL"})]})}),(0,s.jsx)(I,{children:(0,s.jsxs)(v,{children:[(0,s.jsx)(C,{children:"Front End"}),(0,s.jsx)(j,{children:"-HTML/CSS/JS"}),(0,s.jsx)(j,{children:"-React.js"})]})}),(0,s.jsx)(I,{children:(0,s.jsxs)(v,{children:[(0,s.jsx)(C,{children:"Other"}),(0,s.jsx)(j,{children:"-C++"}),(0,s.jsx)(j,{children:"-Git"}),(0,s.jsx)(j,{children:"-English/Portuguese/French/Spanish"})]})})]}),(0,s.jsx)(a,{})]})})}),S=i.default.p.withConfig({displayName:"AboutStyles__ListParagraph",componentId:"sc-1cldzlc-0"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),z=function(){return(0,s.jsx)("div",{children:(0,s.jsxs)(o,{nopadding:!0,id:"technologies",children:[(0,s.jsx)(r,{main:!0,children:"About me"}),(0,s.jsx)(S,{children:"My name is Lucas Kermessi, I am a 19-year-old brazilian that loves technology, currently I am working towards a B.Sc. Computer Science degree, learning everyday new things about the tech field. After I studied Artificial Intelligence at university I developed a huge interest in Machine Learning and Data Science in general, since then, I have been focusing on improving my knowledge about it. Besides that, my passions include AI, Linguistics, Geography and Engineering. And I specially like when these subjects overlaps."}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(a,{})]})})},F=(i.default.ul.withConfig({displayName:"TimeLineStyles__CarouselContainer",componentId:"oopeab-0"})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ","{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"TimeLineStyles__CarouselMobileScrollNode",componentId:"oopeab-1"})(["@media ","{display:flex;min-width:","}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.final?"120%;":"min-content"})),i.default.div.withConfig({displayName:"TimeLineStyles__CarouselItem",componentId:"oopeab-2"})(["background:#0F1624;border-radius:3px;max-width:196px;@media ","{max-width:124px;}@media ","{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;",";}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.active===e.index?"opacity: 1":"opacity: 0.5"})),i.default.h4.withConfig({displayName:"TimeLineStyles__CarouselItemTitle",componentId:"oopeab-3"})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ","{font-size:20px;line-height:28px;margin-bottom:4px;}@media ","{font-size:16px;line-height:24px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.svg.withConfig({displayName:"TimeLineStyles__CarouselItemImg",componentId:"oopeab-4"})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ","{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"],(function(e){return e.theme.breakpoints.sm})),i.default.p.withConfig({displayName:"TimeLineStyles__CarouselItemText",componentId:"oopeab-5"})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ","{font-size:12px;line-height:18px;padding-right:32px;}@media ","{font-size:10px;line-height:16px;padding-right:0;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"TimeLineStyles__CarouselButtons",componentId:"oopeab-6"})(["width:288px;display:none;visibility:hidden;@media ","{display:flex;visibility:visible;margin-bottom:48px;}"],(function(e){return e.theme.breakpoints.sm})),i.default.button.withConfig({displayName:"TimeLineStyles__CarouselButton",componentId:"oopeab-7"})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:",";transform:",";&:focus{outline:none;}"],(function(e){return e.active===e.index?"1":".33"}),(function(e){return e.active===e.index?"scale(1.6)":"scale(1)"})),i.default.div.withConfig({displayName:"TimeLineStyles__CarouselButtonDot",componentId:"oopeab-8"})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]),n(1649)),L=i.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-1oa7ild-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),P=i.default.span.withConfig({displayName:"HeaderStyles__Span",componentId:"sc-1oa7ild-1"})(["font-size:2rem;;"]),T=i.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-1oa7ild-2"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),D=i.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-1oa7ild-3"})(["grid-area:1 / 5 / 2 / 6;display:flex;margin-top:-30px;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),H=(i.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-1oa7ild-4"})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),i.default.button.withConfig({displayName:"HeaderStyles__ContactDropDown",componentId:"sc-1oa7ild-5"})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ","{padding:0.4rem 0;}@media ","{padding:0;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md})),(0,i.default)(F.U0j).withConfig({displayName:"HeaderStyles__NavProductsIcon",componentId:"sc-1oa7ild-6"})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:",";transform:",";&:hover{opacity:1;}@media ","{margin:2px 0 0 2px;width:15px;}"],(function(e){return e.isOpen?"1":".75"}),(function(e){return e.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(e){return e.theme.breakpoints.sm})),i.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-1oa7ild-7"})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"])),O=i.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"po7u6b-0"})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ","{padding:0 16px 48px;width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),E=i.default.a.withConfig({displayName:"FooterStyles__LinkItem",componentId:"po7u6b-1"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ","{font-size:16px;line-height:28px;display:flex;}@media ","{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),q=(i.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"po7u6b-2"})(["max-width:1040px;display:flex;justify-content:space-between;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"po7u6b-3"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"po7u6b-4"})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),i.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"po7u6b-5"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md})),i.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"po7u6b-6"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),B=i.default.div.withConfig({displayName:"FooterStyles__LinkColumn",componentId:"po7u6b-7"})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]),G=i.default.h4.withConfig({displayName:"FooterStyles__LinkTitle",componentId:"po7u6b-8"})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ","{font-size:10px;line-height:12px;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),A=function(){return(0,s.jsx)(O,{children:(0,s.jsx)(q,{children:(0,s.jsxs)(B,{children:[(0,s.jsx)(G,{children:"Email"}),(0,s.jsx)(E,{href:"mailto:lucaskermessi@gmail.com",children:"lucaskermessi@gmail.com"}),(0,s.jsx)(G,{children:"Linkedin"}),(0,s.jsx)(E,{href:"https://www.linkedin.com/in/lucaskermessi/",children:"lucaskermessi"})]})})})},M=(n(1664),n(8193)),U=n(859),W=function(){return(0,s.jsxs)(L,{children:[(0,s.jsx)(T,{children:(0,s.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white",marginBottom:"30px",marginTop:"-3px"},children:[(0,s.jsx)(U.vs1,{size:"4rem"})," ",(0,s.jsx)(P,{children:"Portfolio"})]})}),(0,s.jsxs)(D,{children:[(0,s.jsx)(H,{href:"https://www.linkedin.com/in/lucaskermessi/",children:(0,s.jsx)(M._iD,{size:"3rem"})}),(0,s.jsx)(H,{href:"https://github.com/lucaskrms",children:(0,s.jsx)(M.RrF,{size:"3rem"})})]})]})},K=i.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"sc-1vt8ddb-0"})(["max-width:1280px;width:100%;margin:auto;"]),J=function(e){var t=e.children;return(0,s.jsxs)(K,{children:[(0,s.jsx)(W,{}),(0,s.jsx)("main",{children:t}),(0,s.jsx)(A,{})]})},R=function(){return(0,s.jsxs)(J,{children:[(0,s.jsx)(d,{}),(0,s.jsx)(k,{}),(0,s.jsx)(N,{}),(0,s.jsx)(z,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4423)}])},1664:function(e,t,n){n(7942)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return p}});var i=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=i.createContext&&i.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};function d(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),d(e.child))}))}function p(e){return function(t){return i.createElement(l,a({attr:a({},e.attr)},t),d(e.child))}}function l(e){var t=function(t){var n,o=e.attr,r=e.size,d=e.title,p=s(e,["attr","size","title"]),l=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,p,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),d&&i.createElement("title",null,d),e.children)};return void 0!==r?i.createElement(r.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){e.O(0,[866,921,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);