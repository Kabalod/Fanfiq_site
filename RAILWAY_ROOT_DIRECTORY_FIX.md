# 🔧 RAILWAY ROOT DIRECTORY FIX

## ❌ Проблема:
Railway развернул **статический HTML** (`index.html`) вместо **React приложения** (`fanfiq-app/`)

## 🎯 Что видно на скриншоте:
- URL: `fanfiqsite-production.up.railway.app`
- Отображается: **Старая статическая страница**
- Кнопка темы: **☀️ Не работает** (нет JavaScript)
- Дизайн: **Старая HTML версия** без React компонентов

## ✅ РЕШЕНИЕ:

### 1️⃣ Настройте Root Directory в Railway:

#### **В Railway Dashboard:**
1. Перейдите в **Settings** вашего проекта
2. Найдите секцию **"Source"**
3. Нажмите **"Configure"** или **"Edit"**
4. В поле **"Root Directory"** укажите: `fanfiq-app`
5. Нажмите **"Save"**
6. Railway автоматически **пересоберет** проект

### 2️⃣ Альтернативный способ - через railway.json:

Создайте файл `railway.json` в **корне репозитория** (не в fanfiq-app):

```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/",
    "healthcheckTimeout": 300,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  },
  "environments": {
    "production": {
      "variables": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

И добавьте `nixpacks.toml` в **корень репозитория**:

```toml
[phases.setup]
nixPkgs = ["nodejs-20_x", "npm-10_x"]
workDir = "/app/fanfiq-app"

[phases.install]
cmds = ["cd fanfiq-app && npm ci --prefer-offline --no-audit"]

[phases.build]
cmds = ["cd fanfiq-app && npm run build"]

[start]
cmd = "cd fanfiq-app && npm start"
```

### 3️⃣ Проверьте настройки:

#### **Правильные настройки Railway:**
- **Source Repo:** `Kabalod/Fanfiq_site` ✅
- **Branch:** `main` ✅
- **Root Directory:** `fanfiq-app` ❗ (ВАЖНО!)
- **Build Command:** `npm run build`
- **Start Command:** `npm start`

## 🎯 После исправления получите:

### ✅ React приложение с:
- **🎭 Parallax Hero** с mouse tracking
- **🌙 Рабочая кнопка темы** (☀️/🌙)
- **📊 Анимированная статистика**
- **📈 Интерактивные графики**
- **🗺️ Детальная дорожная карта**
- **🎨 Все современные эффекты**

### 🌐 Правильный URL структуры:
- **Hero:** Parallax эффекты
- **Features:** 6 возможностей с анимациями
- **Stats:** Анимированные счетчики
- **Charts:** Интерактивные графики
- **Roadmap:** Детальные этапы
- **Pricing:** 3 тарифа с эффектами

## 🚀 Действия:

1. **Настройте Root Directory** в Railway на `fanfiq-app`
2. **Railway пересоберет** проект из правильной папки
3. **React приложение** будет развернуто
4. **Все кнопки** заработают
5. **Parallax эффекты** активируются

---

## ⚠️ ВАЖНО:
**Текущий деплой показывает старый HTML файл!**
**Нужно указать папку `fanfiq-app` как Root Directory в Railway!**

После исправления вы получите полноценное React приложение с рабочими кнопками и всеми эффектами! 🎉
