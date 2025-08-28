
# 🚀 Portfolio Website  

یک وبسایت نمونه کار مدرن و تعاملی ساخته شده با **React**, **Vite** و انیمیشن‌های جذاب. این پروژه برای نمایش مهارت‌ها، نمونه‌کارها و اطلاعات تماس به شکلی حرفه‌ای طراحی شده است.  

![Portfolio Demo](public/demo.png) <!-- در صورت داشتن تصویر یا گیف دمو، این مسیر رو آپدیت کن -->

---

## ✨ ویژگی‌ها (Features)
- 🌐 **چندزبانه (i18next)**: پشتیبانی از زبان‌های فارسی و انگلیسی  
- 🎨 **طراحی مدرن**: با استفاده از **Framer Motion** و انیمیشن‌های روان  
- 🖼️ **مدل‌های سه‌بعدی (Three.js)**: نمایش المان‌های سه‌بعدی جذاب در صفحات  
- 📧 **فرم تماس با EmailJS**: ارسال مستقیم پیام‌ها از طریق ایمیل  
- 📱 **ریسپانسیو کامل**: سازگار با موبایل، تبلت و دسکتاپ  
- ⚡ **اجرای سریع**: با کمک Vite و ساختار بهینه  

---

## 🛠️ تکنولوژی‌ها (Tech Stack)

| ابزار / کتابخانه            | توضیحات                          |
|-----------------------------|----------------------------------|
| [React](https://react.dev/)  | فریمورک اصلی برای رابط کاربری     |
| [Vite](https://vitejs.dev/)  | ابزار سریع برای Build و Dev       |
| [Framer Motion](https://www.framer.com/motion/) | انیمیشن‌های تعاملی و روان |
| [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) | رندر مدل‌های سه‌بعدی در React |
| [React Router](https://reactrouter.com/) | مدیریت مسیرها و صفحات         |
| [EmailJS](https://www.emailjs.com/)      | ارسال ایمیل بدون نیاز به بک‌اند |
| [i18next](https://www.i18next.com/)      | مدیریت چندزبانه و ترجمه        |

---

## 📦 پیش‌نیازها (Prerequisites)

قبل از اجرا مطمئن شوید موارد زیر نصب شده‌اند:  
- [Node.js](https://nodejs.org/) (نسخه 18 یا بالاتر پیشنهاد می‌شود)
- [npm](https://www.npmjs.com/) یا [yarn](https://yarnpkg.com/)

---

## 🚀 نصب و راه‌اندازی (Installation)

```bash
# مخزن را کلون کنید
git clone https://github.com/ronin1777/Portfolio.git

# وارد پوشه پروژه شوید
cd Portfolio

# وابستگی‌ها را نصب کنید
npm install

# اجرای محیط توسعه
npm run dev
```

پس از اجرا، پروژه معمولاً روی آدرس [http://localhost:5173](http://localhost:5173) در دسترس خواهد بود.  

---

## 📂 ساختار پروژه (Project Structure)

```
Portfolio/
 ├── public/             # فایل‌های استاتیک مثل تصاویر و آیکون‌ها
 ├── src/
 │   ├── assets/         # منابع تصویری و مدل‌های سه‌بعدی
 │   ├── components/     # کامپوننت‌های اصلی UI
 │   ├── context/        # Context API برای مدیریت تم و ...
 │   ├── locales/        # فایل‌های ترجمه (fa, en)
 │   ├── App.jsx         # ساختار اصلی صفحات و مسیرها
 │   ├── main.jsx        # نقطه شروع برنامه
 │   ├── i18n.js         # پیکربندی چندزبانه
 │   ├── index.css       # استایل‌های کلی
 │   └── App.css         # استایل‌های سطح بالا
 ├── package.json        # وابستگی‌ها و اسکریپت‌ها
 ├── vite.config.js      # تنظیمات Vite
 └── README.md           # این فایل
```

---

## ⚙️ متغیرهای محیطی (Environment Variables)

برای استفاده از EmailJS، در ریشه پروژه یک فایل `.env` ایجاد کرده و مقادیر زیر را قرار دهید:

```
VITE_EMAILJS_PUBLIC_ID=your_public_key_here
```

مقادیر رو می‌تونید از داشبورد EmailJS بگیرید.  

---

## 📖 نحوه استفاده (Usage)

- **صفحه اصلی**: معرفی، مهارت‌ها، پروژه‌ها و بخش تماس  
- **مسیر /project/:projectId**: نمایش جزئیات هر پروژه  
- **مسیرهای اشتباه**: نمایش صفحه 404 اختصاصی  

---

## 🤝 مشارکت (Contributing)

مشارکت شما استقبال می‌شود!  
برای مشارکت:  
1. مخزن را Fork کنید  
2. شاخه جدید بسازید (`git checkout -b feature/AmazingFeature`)  
3. تغییرات را Commit کنید (`git commit -m 'Add some AmazingFeature'`)  
4. Push کنید (`git push origin feature/AmazingFeature`)  
5. درخواست Pull Request بدهید  

---

## 📜 لایسنس (License)

این پروژه تحت لایسنس MIT منتشر شده است. برای اطلاعات بیشتر به فایل [LICENSE](LICENSE) مراجعه کنید.  

---

## 📬 تماس (Contact)

برای ارتباط و سوالات:  
- ایمیل: your-email@example.com  
- لینکدین: [Your LinkedIn](https://linkedin.com/in/yourprofile)  
- گیت‌هاب: [ronin1777](https://github.com/ronin1777)  

---
