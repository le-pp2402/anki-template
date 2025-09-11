export function lcs(a: string, b: string): string {
    const m = a.length;
    const n = b.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));


    if (a[0] == b[0]) {
        dp[0][0] = 1;
        dp[0][0] = 0;
    }


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == 0 && j == 0) continue;
            if (i >= 1) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
            }
            if (j >= 1) {
                dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
            }
            if (a[j] == b[i]) {
                dp[i][j] = Math.max(dp[i][j], (i >= 1 && j >= 1 ? dp[i - 1][j - 1] : 0) + 1);
            }
        }
    }

    let res = "";
    let i = n - 1, j = m - 1;
    while (i >= 0 && j >= 0) {
        if (a[j] == b[i]) {
            res = a[j] + res;
            i--;
            j--;
        } else if (i >= 1 && dp[i][j] == dp[i - 1][j]) {
            i--;
        } else if (j >= 1 && dp[i][j] == dp[i][j - 1]) {
            j--;
        } else {
            i--;
            j--;
        }
    }

    return res;
}
