import React, { useState } from 'react';

const Password = () => {
    const [password, setPassword] = useState('');
    const [lowerCase, setLowerCase] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [length, setLength] = useState(8); // Default password length

    const generatePassword = () => {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()';

        let validChars = '';
        if (lowerCase) validChars += lowercaseChars;
        if (upperCase) validChars += uppercaseChars;
        if (number) validChars += numberChars;
        if (symbol) validChars += symbolChars;

        if (!validChars) {
            return ''; // No valid character type selected
        }

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomChar = validChars.charAt(Math.floor(Math.random() * validChars.length));
            generatedPassword += randomChar;
        }
        return generatedPassword;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!lowerCase && !upperCase && !number && !symbol) {
            alert('Please select at least one character type.');
            return;
        }

        const newPassword = generatePassword();
        setPassword(newPassword);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-yellow-200">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <input
                    type="text"
                    placeholder="Generated Password"
                    value={password}
                    readOnly
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="lowerCase"
                                checked={lowerCase}
                                onChange={() => setLowerCase(!lowerCase)}
                                className="mr-2"
                            />
                            <label htmlFor="lowerCase" className="select-none">
                                Include Lowercase
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="upperCase"
                                checked={upperCase}
                                onChange={() => setUpperCase(!upperCase)}
                                className="mr-2"
                            />
                            <label htmlFor="upperCase" className="select-none">
                                Include Uppercase
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="number"
                                checked={number}
                                onChange={() => setNumber(!number)}
                                className="mr-2"
                            />
                            <label htmlFor="number" className="select-none">
                                Include Number
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="symbol"
                                checked={symbol}
                                onChange={() => setSymbol(!symbol)}
                                className="mr-2"
                            />
                            <label htmlFor="symbol" className="select-none">
                                Include Special Characters
                            </label>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="length" className="mr-2 select-none">
                                Password Length:
                            </label>
                            <input
                                type="number"
                                id="length"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                min="8"
                                max="50"
                                className="w-16 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Generate Password
                        </button>
                        {password && (
                            <button
                                type="button"
                                onClick={handleCopy}
                                className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
                            >
                                Copy Password
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Password;
