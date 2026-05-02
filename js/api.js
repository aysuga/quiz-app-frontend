const BASE_URL = "https://quiz-app-backend-production-ffe2.up.railway.app/api";

// ── REGISTER ──────────────────────────────────────────
async function registerUser(username, email, password) {
    const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });
    return await res.json();
}

// ── LOGIN ─────────────────────────────────────────────
async function loginUser(username, password) {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });
    return await res.json();
}

// ── GET ALL QUIZZES ───────────────────────────────────
async function getAllQuizzes() {
    const res = await fetch(`${BASE_URL}/quiz/all`);
    return await res.json();
}

// ── GET QUESTIONS ─────────────────────────────────────
async function getQuestions(quizId) {
    const res = await fetch(`${BASE_URL}/quiz/${quizId}/questions`);
    return await res.json();
}

// ── SUBMIT QUIZ ───────────────────────────────────────
async function submitAnswers(quizId, userId, answers) {
    const res = await fetch(
        `${BASE_URL}/quiz/${quizId}/submit?userId=${userId}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(answers)
        }
    );
    return await res.json();
}

// ── GET LEADERBOARD ───────────────────────────────────
async function getLeaderboard(quizId) {
    const res = await fetch(`${BASE_URL}/quiz/${quizId}/leaderboard`);
    return await res.json();
}
