import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

describe("renders signup button", () => {
    test("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button", { name: "/Signup" });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    })
})