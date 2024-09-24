const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const validateMobileNo = (mobileNo) => {
    const mobilePattern = /^[6789]\d{9}$/;
    console.log(mobilePattern.test(mobileNo))
    return mobilePattern.test(mobileNo);
};
export{
    validateEmail,
    validateMobileNo
}