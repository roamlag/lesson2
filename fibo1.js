/**
 * Created by galmaor on 17/03/14.
 */

function fibonaci(n) {
    if (n<3) return 1;
    else return fibonaci(n-1)+fibonaci(n-2);
}
for (var i=1; i<11; ++i) {
    console.log("result is", fibonaci(i));
}