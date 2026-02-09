import pcbnew, sys, json, os


def generate_board(spec):
board = pcbnew.BOARD()
board.SetTitleBlock(pcbnew.TITLE_BLOCK())


width = spec.get("width", 50)
height = spec.get("height", 50)


rect = pcbnew.PCB_SHAPE(board)
rect.SetShape(pcbnew.SHAPE_T_RECT)
rect.SetStart(pcbnew.wxPointMM(0,0))
rect.SetEnd(pcbnew.wxPointMM(width, height))
board.Add(rect)


pcbnew.SaveBoard("output.kicad_pcb", board)


plot = pcbnew.PLOT_CONTROLLER(board)
plot.SetLayer(pcbnew.F_Cu)
plot.OpenPlotfile("gerbers", pcbnew.PLOT_FORMAT_GERBER, "")
plot.PlotLayer()
plot.ClosePlot()


if __name__ == "__main__":
spec = json.loads(sys.argv[1])
generate_board(spec)
