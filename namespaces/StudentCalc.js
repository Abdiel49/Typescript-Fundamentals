var StudentCalc;
(function (StudentCalc) {
    function FeeCalc(fee, term) {
        return fee * term;
    }
    StudentCalc.FeeCalc = FeeCalc;
})(StudentCalc || (StudentCalc = {}));
