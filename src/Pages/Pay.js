

import { useEffect, useState } from 'react';
import React from 'react';
import Payment from './Payment';
import './pay.css'; 

function Pay() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [amount, setAmount] = useState("");
    const [time, setTime] = useState("");
    const timestamp = Date.now();
    const CryptoJS = require('crypto-js');
    const tx_ref = CryptoJS.SHA256(`${fname}${lname}${amount}${timestamp}`).toString(CryptoJS.enc.Hex);
    const public_key = "CHAPUBK_TEST-otbqHF5kcIMqWPLzIJi5rMhlC98KyJjz";

    function amountGenerator() {
        return time * 0.25;
    }

    useEffect(() => {
        setAmount(amountGenerator());
    }, [time]);

    return (
        <div className="payment-container">
            <header className="payment-header">
            <div class="logo-container">
  <img src="https://i.pinimg.com/736x/2b/e9/90/2be9908a0fbee5d2f37d1a48c30b26cf.jpg" alt="Logo" className="logo" />
</div>
<div class = "logo-name"><h1>Smart Bench.co</h1></div>
                <h1 className="header-title">Get to Payment Gateway</h1>
                <h1 className="header-subtitle">Effortless Payment Solutions Tailored for You.</h1>

            </header>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Enter Desired Minute"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    readOnly
                    className="form-input"
                />
                {fname !== "" && amount !== "" && (
                    <Payment
                        fname={fname}
                        lname={lname}
                        amount={amount}
                        tx_ref={tx_ref}
                        public_key={public_key}
                    />
                )}
                </div>
        </div>
    );
}
export default Pay;