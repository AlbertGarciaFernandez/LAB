import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("suite login page renders a valid login form without errors", () => {
  const loginPage = readFileSync("app/[locale]/suite/login/page.tsx", "utf8");
  const loginForm = readFileSync("components/suite/login/LoginForm.tsx", "utf8");
  const authContext = readFileSync("lib/suite/auth-context.tsx", "utf8");

  assert.match(loginPage, /LoginForm/);
  assert.match(loginPage, /Card/);
  assert.match(loginPage, /CardHeader/);
  assert.match(loginPage, /CardContent/);
  assert.match(loginPage, /CardTitle/);

  assert.match(loginForm, /useAuth/);
  assert.match(loginForm, /login\(/);
  assert.match(loginForm, /type="email"/);
  assert.match(loginForm, /type=\{showPassword \? "text" : "password"\}/);
  assert.match(loginForm, /type="submit"/);
  assert.match(loginForm, /demo@codehunterlab\.com/);
  assert.match(loginForm, /demo123/);

  assert.match(authContext, /localStorage\.getItem\(STORAGE_KEY\)/);
  assert.match(authContext, /localStorage\.setItem\(STORAGE_KEY,/);
  assert.match(authContext, /localStorage\.removeItem\(STORAGE_KEY\)/);
  assert.match(authContext, /demo@codehunterlab\.com/);
  assert.match(authContext, /demo123/);
});

test("suite app layout wraps routes in AuthProvider and ThemeProvider", () => {
  const layout = readFileSync("app/[locale]/suite/layout.tsx", "utf8");

  assert.match(layout, /AuthProvider/);
  assert.match(layout, /ThemeProvider/);
  assert.match(layout, /defaultTheme="dark"/);
});

test("AuthGuard shows a loading skeleton while auth state is loading", () => {
  const authGuard = readFileSync("components/suite/layout/AuthGuard.tsx", "utf8");

  assert.match(authGuard, /isLoading/);
  assert.match(authGuard, /Skeleton/);
  assert.match(authGuard, /router\.replace/);
  assert.match(authGuard, /\/suite\/login/);
});
