"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { Switch } from "@heroui/react";

const ThemeToggle = () => {

    const icons = {
        darkMode: {
            off: FaMoon,
            on: FaSun,
            selectedControlClass: "",
        },
    }

    const { theme, setTheme } = useTheme();

    return (
        <div>
            <div className="flex gap-3">
                {Object.entries(icons).map(([key, value]) => (
                    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")} key={key} defaultSelected size="lg">
                        {({ isSelected }) => (
                            <>
                                <Switch.Control className={isSelected ? value.selectedControlClass : ""}>
                                    <Switch.Thumb>
                                        <Switch.Icon>
                                            {isSelected ? (
                                                <value.on className="size-3 text-inherit opacity-100" />
                                            ) : (
                                                <value.off className="size-3 text-inherit opacity-70" />
                                            )}
                                        </Switch.Icon>
                                    </Switch.Thumb>
                                </Switch.Control>
                            </>
                        )}
                    </Switch>
                ))}
            </div>
        </div >
    );
};

export default ThemeToggle;