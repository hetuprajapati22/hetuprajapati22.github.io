# GitHub Pages par publish karna

## Pehle ek baat

Sabse aasan URL ke liye repository ka naam bilkul ye rakhein:

```
hetuprajapati22.github.io
```

Tab aapki site `https://hetuprajapati22.github.io/` par chalegi aur `404.html` bhi sahi chalega. Agar aap koi aur naam rakhte hain (jaise `portfolio`), to site `https://hetuprajapati22.github.io/portfolio/` par hogi, aur `404.html` mein `/` ko `/portfolio/` karna padega (file ke andar comment mein likha hai).

## Browser se (Git install kiye bina)

1. github.com par login karein, **New repository** dabayein.
2. Repository name: `hetuprajapati22.github.io`. **Public** rakhein. Create karein.
3. **uploading an existing file** (ya Add file > Upload files) par click karein.
4. `hetu-portfolio` folder ke **andar ki saari cheezein** (index.html, project.html, 404.html, README.md, DEPLOYMENT.md, aur css, js, assets folders) drag karke daal dein. Folder ke andar ki cheezein daalni hain, folder ko khud nahi, warna `index.html` ek level neeche chali jayegi.
5. **Commit changes** dabayein.
6. Repository ki **Settings > Pages** kholein. "Build and deployment" mein Source: **Deploy from a branch**, Branch: **main**, folder: **/ (root)**. Save karein.
7. 1 se 3 minute baad Pages ke upar aapki site ka link dikhega.

## Git se (Windows)

Pehle Git install karein, phir `hetu-portfolio` folder mein terminal kholein:

```
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/hetuprajapati22/hetuprajapati22.github.io.git
git push -u origin main
```

Uske baad upar ka step 6 karein.

## Publish ke baad check karein

- Homepage, dark mode aur mobile layout
- `https://hetuprajapati22.github.io/project.html?id=study-nest` khulta hai
- `https://hetuprajapati22.github.io/kuch-galat` par 404 page aata hai
- Resume View/Download chalta hai
- Contact form ka test message aapke email par aata hai (agar `formEndpoint` set kiya hai)

## Baad mein badlav karna

GitHub par file kholein, pencil icon (Edit) dabayein, badlav karein aur **Commit changes** karein. 1 se 2 minute mein site update ho jati hai.

## Dhyan rakhein

- GitHub Pages par file ke naam mein capital aur small letters matter karte hain. `resume.pdf` aur `Resume.pdf` alag maane jaate hain.
- Agar badlav na dikhe to `Ctrl + Shift + R` se refresh karein.
- Portfolio link resume aur LinkedIn par daalna na bhoolein.
