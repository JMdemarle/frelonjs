// gestion des déplacements clavier dans un tableau react

const handleKeyDown = (e, row, col, matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        if (col < cols - 1) setActiveCell({ row, col: col + 1 });
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (col > 0) setActiveCell({ row, col: col - 1 });
        break;
      case "ArrowDown":
      case "Enter":
        e.preventDefault();
        if (row < rows - 1) setActiveCell({ row: row + 1, col });
        break;
      case "ArrowUp":
        e.preventDefault();
        if (row > 0) setActiveCell({ row: row - 1, col });
        break;
      case "Tab":
        e.preventDefault();
        if (e.shiftKey) {
          if (col > 0) setActiveCell({ row, col: col - 1 });
          else if (row > 0) setActiveCell({ row: row - 1, col: cols - 1 });
        } else {
          if (col < cols - 1) setActiveCell({ row, col: col + 1 });
          else if (row < rows - 1) setActiveCell({ row: row + 1, col: 0 });
        }
        break;
      default:
        break;
    }
  };
