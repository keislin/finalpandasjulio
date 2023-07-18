import pandas as pd
from  data.menu import PostresPopulares
from data.crearTabla import crearTabla
tablaPostres=pd.DataFrame(PostresPopulares)
print(tablaPostres)
crearTabla(tablaPostres,"tablaPostresPopulares")