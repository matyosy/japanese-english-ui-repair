const copy = {
  ja: {
    step: "はじめの一歩 · 1 / 2",
    title: "アカウント作成を続ける",
    intro: "Kiri Studioへようこそ。まずメールアドレスを登録してください。入力内容を送信すると確認用のメッセージが届き、認証が完了してからワークスペースを利用できます。",
    emailLabel: "メールアドレス",
    emailHelp: "仕事で確認できるアドレスを入力してください。次の画面へ進む前に、入力内容をいつでも確認できます。",
    terms: "利用規約とプライバシーに関する案内を読み、内容に同意します。",
    submit: "入力内容を確認し、メールアドレスの認証を済ませてアカウント作成を続ける",
    reset: "入力を消去",
    signin: "すでにアカウントをお持ちですか？",
    signinLink: "ログイン",
    sideKicker: "あなたの場所、あなたのペース",
    sideTitle: "小さく始めて、心地よく続ける。",
    sideCopy: "作業の記録も、チームとの会話も。あなたのペースで育てられる、静かなワークスペースです。",
    benefitOne: "必要な情報をひとつの場所に",
    benefitTwo: "いつでも見直せる設定",
    sideFoot: "集中して取り組むために、丁寧につくりました。",
    help: "ヘルプ",
    privacy: "プライバシー",
    success: "確認用メールの案内を表示しました。実際のアカウント作成やメール送信は行っていません。",
    invalid: "メールアドレスを確認し、利用規約への同意にチェックしてください。"
  },
  en: {
    step: "FIRST STEP · 1 / 2",
    title: "Create your account",
    intro: "Welcome to Kiri Studio. Start by adding your email address. After you submit the form, we will show the next steps for verifying your address before you enter your workspace.",
    emailLabel: "Email address",
    emailHelp: "Use an address you can check. You can review your details before moving to the next screen.",
    terms: "I have read and agree to the Terms of Service and Privacy Notice.",
    submit: "Review your details, verify your email address, and continue creating your account",
    reset: "Clear form",
    signin: "Already have an account?",
    signinLink: "Sign in",
    sideKicker: "YOUR SPACE, YOUR PACE",
    sideTitle: "Start small. Make room for good work.",
    sideCopy: "Keep notes, work records, and team conversations in a calm workspace that grows at your pace.",
    benefitOne: "Keep useful details in one place",
    benefitTwo: "Change your settings any time",
    sideFoot: "Thoughtfully made for focused work.",
    help: "Help",
    privacy: "Privacy",
    success: "The next step is ready. This demo does not create an account or send email.",
    invalid: "Check your email address and accept the Terms of Service to continue."
  }
};

const languageButtons = [...document.querySelectorAll("[data-language]")];
const form = document.querySelector("#account-form");
const status = document.querySelector("#form-status");
let currentLanguage = document.documentElement.lang === "en" ? "en" : "ja";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = language === "ja" ? "Kiri Studio アカウント作成" : "Create your Kiri Studio account";
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = copy[language][element.dataset.copy];
    if (value) element.textContent = value;
  });
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  status.textContent = "";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) {
    status.textContent = copy[currentLanguage].invalid;
    status.focus();
    return;
  }
  status.textContent = copy[currentLanguage].success;
  status.focus();
});

form.addEventListener("reset", () => {
  status.textContent = "";
});

setLanguage(currentLanguage);
