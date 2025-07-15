import folium
import pandas as pd

#for 1900
amountofpeople1900 = pd.read_csv("testdata1900.csv", usecols=['Country','Size','Latitude','Longitude'])

#for 1925
amountofpeople1925 = pd.read_csv("testdata1925.csv", usecols=['Country','Size','Latitude','Longitude'])
#for 1950
amountofpeople1950 = pd.read_csv("testdata1950.csv", usecols=['Country','Size','Latitude','Longitude'])

#for 1975
amountofpeople1975 = pd.read_csv("testdata1975.csv", usecols=['Country','Size','Latitude','Longitude'])

#for 2000
amountofpeople2000 = pd.read_csv("testdata2000.csv", usecols=['Country','Size','Latitude','Longitude'])

m = folium.Map(location=(30, 10), tiles=None, zoom_start=3)
folium.TileLayer('cartodb positron', name='Base Map').add_to(m)

fg1900 = folium.FeatureGroup(name="1900", show=False).add_to(m)
fg1925 = folium.FeatureGroup(name="1925", show=False).add_to(m)
fg1950 = folium.FeatureGroup(name="1950", show=False).add_to(m)
fg1975 = folium.FeatureGroup(name="1975", show=False).add_to(m)
fg2000 = folium.FeatureGroup(name="2000", show=False).add_to(m)

folium.LayerControl().add_to(m)

icon_image = "icons8-rabbit-64.png"


icon = folium.CustomIcon(
    icon_image,
    icon_size=(30, 35),
)

for i in range(0, 4): #1900: 4; 1925: 8; 1950: 13; 1975:23; 2000: 15
    if int(amountofpeople1900.iloc[i]['Size']) == 1 : 
        folium.Marker(
            location=[amountofpeople1900.iloc[i]['Latitude'], amountofpeople1900.iloc[i]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople1900.iloc[i]['Size'])) + " GAVST graduate lives in " + amountofpeople1900.iloc[i]['Country'],
                
        ).add_to(fg1900)
    else : 
          folium.Marker(
            location=[amountofpeople1900.iloc[i]['Latitude'], amountofpeople1900.iloc[i]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople1900.iloc[i]['Size'])) + " GAVST graduates live in " + amountofpeople1900.iloc[i]['Country'],
                
        ).add_to(fg1900)
        
for j in range(0, 8): #1900: 4; 1925: 8; 1950: 13; 1975:23; 2000: 15
    if int(amountofpeople1925.iloc[j]['Size']) == 1 : 
        folium.Marker(
            location=[amountofpeople1925.iloc[j]['Latitude'], amountofpeople1925.iloc[j]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople1925.iloc[j]['Size'])) + " GAVST graduate lives in " + amountofpeople1925.iloc[j]['Country'],
                
        ).add_to(fg1925)
    else : 
          folium.Marker(
            location=[amountofpeople1925.iloc[j]['Latitude'], amountofpeople1925.iloc[j]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople1925.iloc[j]['Size'])) + " GAVST graduates live in " + amountofpeople1925.iloc[j]['Country'],
                
        ).add_to(fg1925)

        
for k in range(0, 13): #1900: 4; 1925: 8; 1950: 13; 1975:23; 2000: 15
    if int(amountofpeople1950.iloc[k]['Size']) == 1 : 
        folium.Marker(
            location=[amountofpeople1950.iloc[k]['Latitude'], amountofpeople1950.iloc[k]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople1950.iloc[k]['Size'])) + " GAVST graduate lives in " + amountofpeople1950.iloc[k]['Country'],
                
        ).add_to(fg1950)
    else : 
          folium.Marker(
            location=[amountofpeople1950.iloc[k]['Latitude'], amountofpeople1950.iloc[k]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople1950.iloc[k]['Size'])) + " GAVST graduates live in " + amountofpeople1950.iloc[k]['Country'],
                
        ).add_to(fg1950)

        
for l in range(0, 20): #1900: 4; 1925: 8; 1950: 13; 1975:20; 2000: 15
    if int(amountofpeople1975.iloc[l]['Size']) == 1 : 
        folium.Marker(
            location=[amountofpeople1975.iloc[l]['Latitude'], amountofpeople1975.iloc[l]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople1975.iloc[l]['Size'])) + " GAVST graduate lives in " + amountofpeople1975.iloc[l]['Country'],
                
        ).add_to(fg1975)
    else : 
          folium.Marker(
            location=[amountofpeople1975.iloc[l]['Latitude'], amountofpeople1975.iloc[l]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople1975.iloc[l]['Size'])) + " GAVST graduates live in " + amountofpeople1975.iloc[l]['Country'],
                
        ).add_to(fg1975)

for i in range(0, 15): #1900: 4; 1925: 8; 1950: 13; 1975:23; 2000: 15
    if int(amountofpeople.iloc[i]['Size']) == 1 : 
        folium.Marker(
            location=[amountofpeople.iloc[i]['Latitude'], amountofpeople.iloc[i]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople.iloc[i]['Size'])) + " GAVST graduate lives in " + amountofpeople.iloc[i]['Country'],
                
        ).add_to(fg2000)
    else : 
          folium.Marker(
            location=[amountofpeople.iloc[i]['Latitude'], amountofpeople.iloc[i]['Longitude']], 
            icon=icon,
            popup=  str(int(amountofpeople.iloc[i]['Size'])) + " GAVST graduates live in " + amountofpeople.iloc[i]['Country'],
                
        ).add_to(fg2000)
