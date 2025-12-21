import{a as B,r as $,bi as u,j as e,i as S,bk as D,bj as I,bl as F,bm as G,bn as _}from"./index-DrB1YgVl.js";import"https://esm.sh/html-docx-js-typescript@0.1.5";import"https://esm.sh/file-saver@2.0.5";const h=a=>a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):"",M=a=>a?a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r"):"",A=(a,o,p)=>{const s=encodeURIComponent(a),l=encodeURIComponent(o),n=M(o),t=M(p.replace(/<[^>]*>/g,"").substring(0,155)),c={linkedin:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',pinterest:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.117.223.084.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.343 2.318.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>',facebook:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1h-12c-1.1 0-2 .9-2 2v14h2v-14h12v-2zm3 4h-11c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm0 16h-11v-14h11v14z"/></svg>'};return`
        <div class="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${s}&title=${l}" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 bg-blue-700">${c.linkedin}</a>
            <a href="https://pinterest.com/pin/create/button/?url=${s}&description=${l}" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 bg-red-600">${c.pinterest}</a>
            <a href="https://www.reddit.com/submit?url=${s}&title=${l}" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 bg-orange-500">${c.reddit}</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${s}&quote=${l}" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 bg-blue-600">${c.facebook}</a>
            <button class="copy-details-btn w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 bg-gray-600" data-title="${h(n)}" data-snippet="${h(t)}" data-url="${h(a)}">${c.clipboard}</button>
        </div>
    `},U=`
<script>
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-details-btn');
    
    if (copyButtons.length > 0) {
        const handleCopyFallback = (text, btn) => {
            navigator.clipboard.writeText(text).then(() => {
                const originalContent = btn.innerHTML;
                btn.innerHTML = '<span class="text-xs">تم النسخ!</span>';
                setTimeout(() => {
                    btn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1h-12c-1.1 0-2 .9-2 2v14h2v-14h12v-2zm3 4h-11c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm0 16h-11v-14h11v14z"/></svg>\`;
                }, 2000);
            });
        };

        copyButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const button = this;
                const title = button.dataset.title || '';
                const snippet = button.dataset.snippet || '';
                const url = button.dataset.url || '';
                
                const textPlain = \`\${title}\\n\\n\${snippet}\\n\\n\${url}\`;
                const textHtml = \`
                    <p style="font-weight: bold; font-family: sans-serif; font-size: 16px;">\${title}</p>
                    <div style="font-family: sans-serif; font-size: 14px;"><p>\${snippet}</p></div>
                    <a href="\${url}">\${url}</a>
                \`;

                try {
                    if (typeof ClipboardItem === 'undefined') {
                        handleCopyFallback(textPlain, button);
                        return;
                    }
                    const blobHtml = new Blob([textHtml], { type: 'text/html' });
                    const blobPlain = new Blob([textPlain], { type: 'text/plain' });
                    
                    navigator.clipboard.write([
                        new ClipboardItem({
                            'text/html': blobHtml,
                            'text/plain': blobPlain,
                        })
                    ]).then(() => {
                        const originalContent = button.innerHTML;
                        button.innerHTML = '<span class="text-xs">تم النسخ!</span>';
                        setTimeout(() => {
                            button.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1h-12c-1.1 0-2 .9-2 2v14h2v-14h12v-2zm3 4h-11c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm0 16h-11v-14h11v14z"/></svg>\`;
                        }, 2000);
                    }, (err) => {
                        console.error('Async clipboard write failed, falling back to plain text: ', err);
                        handleCopyFallback(textPlain, button);
                    });
                } catch (error) {
                    console.error('Failed to use Clipboard API, falling back to writeText: ', error);
                    handleCopyFallback(textPlain, button);
                }
            });
        });
    }
});
<\/script>
`,O=(a,o)=>{const p=a==="global"?"/":`/${a}/`,s=a==="global"?"/dz/login/":`/${a}/login/`;return`
        <header class="bg-white shadow-md sticky top-0 z-50">
            <script async src="https://cse.google.com/cse.js?cx=8318067ab6f0244ff"><\/script>
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="${p}" class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"/></svg><span class="text-2xl font-bold text-gray-900" dir="ltr">Gitut</span></a>
                <nav class="flex items-center gap-6">
                    <div class="gcse-search"></div>
                    <a href="${p}" class="text-gray-700 hover:text-green-600 font-semibold">${o("header.search")}</a>
                    <a href="${s}" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">${o("header.login")}</a>
                </nav>
            </div>
        </header>
    `},R=(a,o,p,s,l,n)=>{var g,y;const t=a==="global"?"dz":a,c=((g=n==null?void 0:n.seo)==null?void 0:g[t])||((y=n==null?void 0:n.seo)==null?void 0:y.default),m=s.filter(i=>i.enabled&&(i.lang===o||!i.lang&&o==="ar")).map(i=>`<a href="https://gitut.com/${t}/page/${i.slug}/" class="hover:text-green-600 hover:underline">${h(i.title)}</a>`).join("");return`
        <footer class="bg-white border-t mt-auto">
          <div class="container mx-auto px-4 py-8 flex flex-col items-center gap-4">
            <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600">${l.some(i=>i.enabled&&i.content&&i.content[o])?`<a href="https://gitut.com/blog/" class="hover:text-green-600 hover:underline">${p("footer.blog")}</a>`:""}<a href="https://gitut.com/${t}/services/" class="hover:text-green-600 hover:underline">${p("footer.services")}</a>${m}</nav>
            <p class="text-center text-gray-500 text-sm">&copy; ${new Date().getFullYear()} ${h((c==null?void 0:c.siteName)||"Gitut")}. ${p("footer.rightsReserved")}</p>
          </div>
        </footer>
    `},V=({title:a,description:o,mainContent:p,countryCode:s,lang:l,siteSettings:n,pages:t,allBlogPosts:c,socialShare:d,imageUrl:m,scripts:T=""})=>{var k,N;const P=l==="ar"?"rtl":"ltr",w=_(l),g=O(s,w),y=R(s,l,w,t,c,n),i=`
        <div class="flex flex-col min-h-screen">
            ${g}
            ${p}
            ${y}
        </div>
    `,v=((k=n==null?void 0:n.seo)==null?void 0:k[s])||((N=n==null?void 0:n.seo)==null?void 0:N.default),j=m||"https://file.gitut.com/data/image/icon.png",H=`<script async src="https://www.googletagmanager.com/gtag/js?id=G-2BKKWGCXWX"><\/script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-2BKKWGCXWX');<\/script>`,L=d?A(d.url,d.title,d.description):"";return`<!DOCTYPE html>
        <html lang="${l}" dir="${P}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/png" href="https://file.gitut.com/data/image/icon.png">
            <title>${h(a)}</title>
            <meta name="description" content="${h(o)}">
            
            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="website">
            <meta property="og:url" content="${(d==null?void 0:d.url)||""}">
            <meta property="og:title" content="${h(a)}">
            <meta property="og:description" content="${h(o)}">
            <meta property="og:image" content="${j}">
            <meta property="og:image:secure_url" content="${j}">
            <meta property="og:image:width" content="640">
            <meta property="og:image:height" content="640">
            <meta property="og:site_name" content="${h((v==null?void 0:v.siteName)||"Gitut")}">

            <!-- Twitter -->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:url" content="${(d==null?void 0:d.url)||""}">
            <meta name="twitter:title" content="${h(a)}">
            <meta name="twitter:description" content="${h(o)}">
            <meta name="twitter:image" content="${j}">

            <link rel="preconnect" href="https://cdn.tailwindcss.com" crossorigin>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
            <script src="https://cdn.tailwindcss.com/3.4.1?plugins=typography"><\/script>
            <style>body { font-family: 'Cairo', sans-serif; } .prose a { color: #16a34a; } .prose a:hover { color: #15803d; } .compact-prose p { margin-top: 0; margin-bottom: 0.25em; }</style>
            ${H}
        </head>
        <body class="bg-gray-100 text-gray-900">
            <div id="root">${i}</div>
            ${L}
            ${U}
            ${T}
            <script src="/index.js" type="module"><\/script>
        </body>
        </html>`},K=(a,o,p,s)=>{var d,m;const l=a||"dz",n=F(l),t=((d=o==null?void 0:o.seo)==null?void 0:d[l])||((m=o==null?void 0:o.seo)==null?void 0:m.default);let c=`<main class="flex-grow container mx-auto px-4 py-8">
        <section class="text-center p-8 md:p-10 bg-white rounded-xl shadow-lg">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">${h((t==null?void 0:t.mainPageTitle)||"")}</h1>
          <p class="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">${h((t==null?void 0:t.mainPageSubtitle)||"")}</p>
        </section>
        <div id="root-find-page" class="mt-8">
          <p class="text-center text-gray-500">جاري تحميل أداة البحث...</p>
        </div>
      </main>`;return V({title:`${t==null?void 0:t.siteName} | ${t==null?void 0:t.tagline}`,description:(t==null?void 0:t.metaDescription)||"",mainContent:c,countryCode:l,lang:n,siteSettings:o,pages:p,allBlogPosts:s,scripts:'<script type="module">import("/index.tsx");<\/script>'})},J=()=>{var H,L,k,N;const{siteSettings:a,pages:o,blogPosts:p}=B(),[s,l]=$.useState(u),[n,t]=$.useState(""),[c,d]=$.useState(!1),[m,T]=$.useState("default"),[P,w]=$.useState(new Set);$.useEffect(()=>{l(a?{...u,...a,seo:{...u.seo,...a.seo||{}},social:{...u.social,...a.social||{}}}:u)},[a]);const g=(r,b)=>{const{name:C,value:f}=r.target;w(z=>new Set(z).add(m)),l(z=>{const x=JSON.parse(JSON.stringify(z));return b==="seo"?(x.seo||(x.seo={}),x.seo[m]||(x.seo[m]={...u.seo.default}),x.seo[m][C]=f):(x.social||(x.social={}),x.social[m]||(x.social[m]={...u.social.default}),x.social[m][C]=f),x})},y=async r=>{if(r.preventDefault(),!!s){d(!0),t("");try{await I({seo:s.seo,social:s.social}),t("تم حفظ الإعدادات في قاعدة البيانات. جاري إنشاء ونشر الصفحات...");const b=[],C=Array.from(P);for(const f of C){const z=F(f==="default"?"dz":f),x=K(f,s,o,p),E=f==="default"?"dist/index.html":`dist/${f}/index.html`;b.push({path:E,content:x})}b.length>0?(await G({files:b,commitMessage:`feat(static): Update homepages for ${C.join(", ")}`}),t(`تم حفظ ونشر ${b.length} صفحة رئيسية بنجاح!`)):t("تم حفظ الإعدادات. لا توجد صفحات لتحديثها."),w(new Set)}catch(b){console.error("Error saving settings:",b),alert("حدث خطأ أثناء حفظ ونشر الإعدادات.")}finally{d(!1),setTimeout(()=>t(""),5e3)}}};if(!s)return e.jsx("div",{className:"flex justify-center p-8",children:e.jsx(S,{className:"animate-spin text-2xl"})});const i=((H=s.seo)==null?void 0:H[m])||((L=s.seo)==null?void 0:L.default)||u.seo.default,v=((k=s.social)==null?void 0:k[m])||((N=s.social)==null?void 0:N.default)||u.social.default,j=[{code:"default",name:"Default"},...D.en];return e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6",children:"الهوية والبحث (SEO)"}),n&&e.jsx("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative mb-6",role:"alert",children:e.jsx("span",{className:"block sm:inline",children:n})}),e.jsx("div",{className:"mb-6 border-b border-gray-200",children:e.jsx("nav",{className:"flex flex-wrap -mb-px","aria-label":"Tabs",children:j.map(r=>e.jsx("button",{onClick:()=>T(r.code),className:`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm
                                ${m===r.code?"border-green-500 text-green-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,children:r.name},r.code))})}),e.jsxs("form",{onSubmit:y,className:"space-y-8 bg-white p-8 rounded-lg border",children:[e.jsxs("fieldset",{className:"border p-4 rounded-md",children:[e.jsx("legend",{className:"px-2 font-semibold text-lg text-gray-700",children:"هوية الموقع و SEO"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"اسم التطبيق"}),e.jsx("input",{type:"text",name:"siteName",value:i.siteName||"",onChange:r=>g(r,"seo"),className:"block w-full px-3 py-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"سطر الوصف (Tagline)"}),e.jsx("input",{type:"text",name:"tagline",value:i.tagline||"",onChange:r=>g(r,"seo"),className:"block w-full px-3 py-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"فاصل العنوان"}),e.jsx("input",{type:"text",name:"titleSeparator",value:i.titleSeparator||"",onChange:r=>g(r,"seo"),className:"block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"وصف الموقع (Meta Description)"}),e.jsx("textarea",{name:"metaDescription",rows:2,value:i.metaDescription||"",onChange:r=>g(r,"seo"),className:"block w-full px-3 py-2 border border-gray-300 rounded-md"})]})]})]}),e.jsxs("fieldset",{className:"border p-4 rounded-md",children:[e.jsx("legend",{className:"px-2 font-semibold text-lg text-gray-700",children:"محتوى الصفحة الرئيسية"}),e.jsxs("div",{className:"space-y-4 mt-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"العنوان الرئيسي (النص المتحرك 1)"}),e.jsx("input",{type:"text",name:"mainPageTitle",value:i.mainPageTitle||"",onChange:r=>g(r,"seo"),className:"block w-full px-3 py-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"النص الترحيبي (النص المتحرك 2)"}),e.jsx("textarea",{name:"mainPageSubtitle",rows:3,value:i.mainPageSubtitle||"",onChange:r=>g(r,"seo"),className:"block w-full px-3 py-2 border border-gray-300 rounded-md"})]})]})]}),e.jsxs("fieldset",{className:"border p-4 rounded-md",children:[e.jsx("legend",{className:"px-2 font-semibold text-lg text-gray-700",children:"روابط التواصل الاجتماعي"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"رابط فيسبوك"}),e.jsx("input",{type:"url",name:"facebook",value:v.facebook||"",onChange:r=>g(r,"social"),placeholder:"https://facebook.com/yourpage",className:"block w-full px-3 py-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"رابط تويتر"}),e.jsx("input",{type:"url",name:"twitter",value:v.twitter||"",onChange:r=>g(r,"social"),placeholder:"https://twitter.com/yourprofile",className:"block w-full px-3 py-2 border border-gray-300 rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"رابط انستغرام"}),e.jsx("input",{type:"url",name:"instagram",value:v.instagram||"",onChange:r=>g(r,"social"),placeholder:"https://instagram.com/yourprofile",className:"block w-full px-3 py-2 border border-gray-300 rounded-md"})]})]})]}),e.jsx("div",{className:"flex justify-end pt-6 border-t",children:e.jsxs("button",{type:"submit",disabled:c,className:"flex items-center gap-2 bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 disabled:bg-gray-400",children:[c?e.jsx(S,{className:"animate-spin"}):null,c?"جاري الحفظ والنشر...":"حفظ ونشر التغييرات"]})})]})]})};export{J as default};
