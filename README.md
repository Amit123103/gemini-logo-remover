# ✨ Free Gemini & Google Flow Watermark Remover (Gemini Omni & Nano Banana)

<p align="center">
  <a href="https://ishara-madu.github.io/gemini-watermark-remover/">
    <img src="./assets/amit-logo.png" alt="Gemini Watermark Remover Logo" width="39" height="48" />
  </a>
</p>

<p align="center">
  <strong>Remove visible Gemini and Google Flow watermarks from Gemini Omni videos and Nano Banana AI images online.</strong><br>
  Completely free, private, and runs 100% client-side in your web browser with zero quality loss.
</p>

<p align="center">
  Maintained by <strong>Amit Kumar</strong> · <a href="https://amitakhil.me/SmartPortfolio/">AI &amp; MLOps Engineer portfolio</a> · <a href="https://github.com/Amit123103">GitHub profile</a> · <a href="mailto:akhilsingh2702@gmail.com">Email</a>
</p>

<p align="center">
  <a href="https://ishara-madu.github.io/gemini-watermark-remover/"><img src="https://img.shields.io/badge/🚀_Live_Demo-GitHub_Pages-6366f1?style=for-the-badge" alt="Live Demo" /></a>
  <a href="https://github.com/Amit123103/gemini-logo-remover/stargazers"><img src="https://img.shields.io/github/stars/Amit123103/gemini-logo-remover?style=for-the-badge&color=eab308" alt="GitHub Stars" /></a>
  <a href="https://amitakhil.me/SmartPortfolio/"><img src="https://img.shields.io/badge/Portfolio-Amit_Kumar-635bff?style=for-the-badge" alt="Amit Kumar Portfolio" /></a>
  <a href="mailto:akhilsingh2702@gmail.com"><img src="https://img.shields.io/badge/Contact-Email-3981e6?style=for-the-badge" alt="Email Amit Kumar" /></a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

---

## 🌐 Live Website

👉 **Try it online:** [https://ishara-madu.github.io/gemini-watermark-remover/](https://ishara-madu.github.io/gemini-watermark-remover/)

---

## 💡 Why This Tool?

Most AI watermark removers use **generative AI inpainting**, which hallucinates missing pixels and blurs the background.

Google Gemini, Google Flow, Gemini Omni, and Veo models embed visible watermarks using **transparent alpha blending**. Because the underlying pixels are still present beneath the transparency, **Gemini Watermark Remover** uses exact mathematical unblending to subtract the watermark mask pixel-by-pixel, restoring **100% of your original image & video clarity** with zero quality loss.

$$\text{Original} = \frac{\text{Watermarked} - (\text{Logo} \times \alpha)}{1 - \alpha}$$

---

## 🚀 Features

- 🔒 **100% Private & Client-Side:** Files never leave your device. All rendering is handled locally in your browser via HTML5 Canvas and WebCodecs.
- 🖼️ **Gemini & Nano Banana Image Support:** Clean images (PNG, JPG, WebP) with instant high-resolution lossless PNG export.
- 🎬 **Gemini Omni, Google Flow & Veo 3 Video Support:** Fast frame-by-frame processing with MP4 export while preserving original audio tracks.
- 🎛️ **Live Tuner & Model Presets:** Quick-select model presets for Nano Banana, Gemini Omni, Flow, and Veo alongside real-time sliders and dual zoomed comparison views.
- ⚡ **Zero Quality Loss:** Restores exact pixel colors without blurry inpainting.
- 📱 **Fully Responsive:** Beautiful, clean, modern UI optimized for desktop, tablet, and mobile browsers.
- 🆓 **Unlimited & Free:** No signups, no subscriptions, and no secondary watermarks.

---

## 🛠️ Tech Stack

- **Frontend:** Pure Semantic HTML5, Modern Vanilla CSS (Custom Design System), JavaScript (ES6+)
- **Processing:** HTML5 Canvas API, WebCodecs API, [MediaBunny](https://github.com/diffusion-studio/mediabunny) for high-performance in-browser video unblending and AVC/H.264 muxing
- **Hosting:** GitHub Pages

---

## 💻 Local Development

Run the project locally with any static web server:

```bash
# 1. Clone the repository
git clone https://github.com/Amit123103/gemini-logo-remover.git

# 2. Navigate to project folder
cd gemini-watermark-remover

# 3. Start a local server (using Python 3, Node, or VS Code Live Server)
# Option A: Python
python3 -m http.server 8000

# Option B: Node.js (npx serve)
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Amit123103/gemini-logo-remover/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💌 Contact & Support

If you found this tool helpful, consider giving it a ⭐️ star on GitHub. For questions or collaboration, contact **Amit Kumar** at [akhilsingh2702@gmail.com](mailto:akhilsingh2702@gmail.com), or visit the [portfolio](https://amitakhil.me/SmartPortfolio/) and [GitHub profile](https://github.com/Amit123103).

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
