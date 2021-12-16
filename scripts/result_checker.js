function someoneWon(grid) {
    if (grid[0][0] != -1 && grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
        return true;
    } else if (grid[2][0] != -1 && grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2]) {
        return true;
    } else if (grid[0][0] != -1 && grid[0][0] == grid[1][0] && grid[1][0] == grid[2][0]) {
        return true;
    } else if (grid[0][1] != -1 && grid[0][1] == grid[1][1] && grid[1][1] == grid[2][1]) {
        return true;
    } else if (grid[0][2] != -1 && grid[0][2] == grid[1][2] && grid[1][2] == grid[2][2]) {
        return true;
    } else if (grid[0][0] != -1 && grid[0][0] == grid[0][1] && grid[0][0] == grid[0][2]) {
        return true;
    } else if (grid[1][0] != -1 && grid[1][0] == grid[1][1] && grid[1][1] == grid[1][2]) {
        return true;
    } else if (grid[2][0] != -1 && grid[2][0] == grid[2][1] && grid[2][1] == grid[2][2]) {
        return true;
    } else {
        return false;
    }
}