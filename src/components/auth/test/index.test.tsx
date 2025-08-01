import { describe, vi, it, afterEach, beforeEach, expect } from "vitest";
import { cleanup, render, screen } from '@testing-library/react'
import CForgotPassword from "@/components/auth/forgot_password";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/vitest';
import CLogin from "../login";
import { TLoginFormShema } from "@/validations/auth";
import CSignIn from "../signin";


describe("forgot password component", () => {
    let mockSubmitHandler: () => void;
    beforeEach(() => {
        mockSubmitHandler = vi.fn();
    });
    afterEach(() => {
        vi.clearAllMocks();
        cleanup()
    });
    it("should call submit after click", async () => {
        render(<CForgotPassword submitHandler={mockSubmitHandler} />)
        const user = await userEvent.setup();
        const btn = screen.getByTestId("submit");
        const input = screen.getByTestId("forgot_password_input");
        await user.type(input, "test@test.com")
        await user.click(btn);
        expect(mockSubmitHandler).toHaveBeenCalled()
    });

    it("should submit be disable if input invalid", async () => {
        render(<CForgotPassword submitHandler={mockSubmitHandler} />)
        const user = await userEvent.setup();
        const btn = screen.getByTestId("submit");
        const input = screen.getByTestId("forgot_password_input");
        await user.type(input, "test")
        expect(btn).toBeDisabled();
    })
});


describe("login", () => {

    let handleLogin: (data: TLoginFormShema) => Promise<any>;

    beforeEach(() => {
        handleLogin = vi.fn()
    })

    afterEach(() => {
        vi.clearAllMocks();
        cleanup();
    });

    it("shoult in login exist email input", () => {
        render(<CLogin handleSubmit={handleLogin} />)
        const input = screen.getByTestId('login');
        expect(input).toBeDefined();
        expect(input.attributes.getNamedItem('placeholder')?.value).toBe('m@example.com');
        expect(input.attributes.getNamedItem('name')?.value).toBe('email');
    });

    it("should exist pwd input", () => {
        render(<CLogin handleSubmit={handleLogin} />)
        const input = screen.getByTestId('password');
        expect(input).toBeDefined();
        expect(input.attributes.getNamedItem('type')?.value).toBe('password')
    });

    it("should not exacute handleLogin if form invalid", async () => {
        render(<CLogin handleSubmit={handleLogin} />);
        const user = await userEvent.setup();
        const btn = screen.getByTestId("login_submit");
        await user.click(btn);
        expect(handleLogin).not.toBeCalled()
    });

    it("should exacute handle login if form valid", async () => {
        render(<CLogin handleSubmit={handleLogin} />);
        const user = await userEvent.setup();
        const lInput = screen.getByTestId("login");
        const pInput = screen.getByTestId("password");
        const sBtn = screen.getByTestId("login_submit")
        await user.type(lInput, "test@test.com");
        await user.type(pInput, "Qaz12wsxd!");
        await user.click(sBtn);
        expect(handleLogin).toBeCalledTimes(1)
    });
});

describe("sign in", () => {
    afterEach(() => {
        cleanup();
        vi.clearAllMocks();
    });

    it("should exist sign in component", () => {
        render(<CSignIn />);
        const component = screen.getByTestId('signin');
        expect(component).toBeDefined()
    });

    it("should exit email input", () => {
        render(<CSignIn />);
        const email = screen.getByTestId("signin_email");
        expect(email).toBeDefined();
    });
    it("should pwd input exist", () => {
        render(<CSignIn />);
        const pwd = screen.getByTestId("signin_pwd");
        expect(pwd).toBeDefined();
    });
    it("should repeat pwd input to be exist", () => {
        render(<CSignIn />);
        const repeatPwd = screen.getByTestId("signin_pwd_reapeat");
        expect(repeatPwd).toBeDefined();
    });

    it("should exist sign in button", () => {
        render(<CSignIn />);
        const signin = screen.getByTestId("signin_signin_btn");
        expect(signin).toBeDefined();
    });


    it.skip("should exist return to login", () => {
        render(<CSignIn />);
        const login = screen.getByTestId('signin_return_to_login');
        expect(login).toBeDefined()
    });

    it.skip.each([
        { testId: "signin_google_btn" },
        { testId: "signin_facebook_btn" },
        { testId: "signin_linkedin_btn" }
    ])("should exits sign in with $testId", ({ testId }) => {
        render(<CSignIn />)
        const test = screen.getByTestId(testId);
        expect(testId).toBeDefined()
    })
})
