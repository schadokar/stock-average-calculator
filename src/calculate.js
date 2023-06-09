function calculateApproxUnits(avg, ltp, qty, desired) {
    console.log(typeof avg, typeof ltp, typeof qty, typeof desired)
    const investedAmt = parseInt(avg) * parseInt(qty)

    let extraQty = 1
    for (; desired > ltp;) {
        const newAmt = investedAmt + (extraQty * ltp)
        const newAvg = newAmt / (qty + extraQty)
        if (newAvg <= desired) {
            console.log("final amount ", newAmt)
            console.log("extra amount ", extraQty * ltp)
            return JSON.stringify({  extraQty, newAmt })
        }
        extraQty += 1
    }


    return undefined
}

export default calculateApproxUnits