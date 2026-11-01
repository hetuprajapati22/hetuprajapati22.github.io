# Hetu Prajapati - Portfolio

Plain HTML, CSS aur JavaScript se bana portfolio. Koi framework ya npm nahi chahiye.

## Folder structure

```
hetu-portfolio/
  index.html          Homepage
  project.html        Project detail page (project.html?id=study-nest)
  404.html            "Page not found" page
  css/style.css       Main styling aur colors
  css/project.css     Sirf project.html ki styling
  js/script.js        Settings, theme toggle, menu, contact form
  js/projects.js      Aapke projects ka data
  js/project-detail.js  project.html ko banata hai
  assets/resume.pdf   Aapka resume
  assets/images/      Images
  assets/icons/       Icons
```

## Computer par kholna

`index.html` par double-click karein. Sab kuch dekhne ke liye theek hai. Contact form aur 404 page ki testing ke liye VS Code ka "Live Server" use karna behtar hai (VS Code mein `hetu-portfolio` folder hi open karein).

## Kya kahan edit karein

| Kya badalna hai | Kaunsi file |
|---|---|
| Colors (light/dark) | `css/style.css`, sabse upar `:root` |
| About Me, Skills, Education, Certifications, Volunteer, Contact text | `index.html` |
| Projects (naam, description, links, features) | `js/projects.js` |
| Resume, WhatsApp, contact form settings | `js/script.js`, sabse upar `CONFIG` |

Naam, email ya LinkedIn badalna ho to `index.html` aur `project.html` dono mein dhundhein (header/footer dono jagah hain).

## Resume add karna (Add your resume)

1. Apna PDF `assets` folder mein rakhein.
2. Naam bilkul `resume.pdf` hona chahiye (chhote letters).
3. `js/script.js` mein `resumeReady: true` hona chahiye.

Resume badalna ho to nayi file usi naam se replace kar dein.

## WhatsApp button

Abhi hidden hai. `js/script.js` mein likhein:

```js
whatsappNumber: "919XXXXXXXXX",
```

Country code ke saath, sirf digits (na `+`, na space). Save karte hi button contact section mein dikhega.

## Contact form connect karna

Static website khud message nahi bhej sakti, isliye ek form service chahiye. Jab tak ye set nahi hota, form honestly batata hai ki message bheja nahi gaya aur email app wala link deta hai.

Formspree jaisi service ke steps (screens thode alag dikh sakte hain):

1. Service par free account banayein aur ek naya form banayein, email `hetu2286@gmail.com` do.
2. Wo aapko ek form link dega, jaise `https://formspree.io/f/xxxxxxxx`.
3. Us link ko `js/script.js` mein daalein:
   ```js
   formEndpoint: "https://formspree.io/f/xxxxxxxx",
   ```
4. Site publish karne ke baad khud ek test message bhejein aur check karein ki aapke email par aaya ya nahi. Pehli baar service email confirm karne ko keh sakti hai.

Ye form link public hota hai aur secret nahi hai. Lekin koi private API key ya password kabhi `script.js` mein mat daalein, kyunki browser ka code sab dekh sakte hain.

## Projects mein repository link jodna

Abhi sirf aapka GitHub profile link dikhta hai. Kisi project ka asli repository link jodna ho to `js/projects.js` mein us project ke andar likhein:

```js
repoUrl: "https://github.com/hetuprajapati22/REPO-NAME",
```

Link pehle browser mein khol kar check kar lein. Tab "View source code" button dikhega.

## Naya project jodna

`js/projects.js` mein kisi purane project ko copy karein, `id` naya (chhote letters, `-` ke saath) dein, aur baaki details badlein. Sirf wahi likhein jo sach hai. `featured: true` wale pehle 3 projects homepage ke upar dikhte hain.

## Certificate link jodna

Abhi certificates ke link nahi hain. Asli link ya file milne par `index.html` ke us certificate card mein `<a href="LINK">View certificate</a>` jod dein.

## Testing checklist (publish karne se pehle)

- Menu ke saare links sahi section par jaate hain
- Dark mode chalta hai aur refresh ke baad bhi yaad rehta hai
- Phone ya chhoti browser window mein menu aur layout theek hain
- Har project card ka "View details" khulta hai, aur `project.html?id=abc` par "Project not found" aata hai
- Resume View aur Download dono chalte hain
- Khali contact form submit karne par errors aate hain
- Saare live links (4 projects) khulte hain
