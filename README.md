# AgroIntelliJ

#### Description
* AI-driven solutions for climate-resilient agriculture and food security.

 Agro-IntelliJ is an AI-powered system that uses NDVI and climate data from satellites to predict wheat yield, with a web interface that lets users see predictions in real time.

 ### Folder Structure
- * wheat-yield-ai/
- * backend/
- * frontend/
- * data/
- * models/
- * notebooks/
- * README.md
 ### pip install dependencies
 pandas  
 matplotlib
 fastapi
uvicorn
pandas
numpy
scikit-learn
xgboost
earthengine-api
requests
geopandas
shapely
 ### Load Dataset
 ### FRONT END
 - HTML
 - CSS 
 - JAVASCRIPT 
 - Trend Chart (NDVI Curves, Yield Trends)

 ### BACKEND
 - Data Pipeline
   * Pull satellite data via Google Earth Engine 
   * Process NDVI + weather data 
   * source data from Kaggle: https://www.kaggle.com/datasets/shaikasif89/wheat-yeild
   

 #### - Integrating
 - Segment Anything Model v2 - field detection 
- Google Earth Engine - NDVI extraction 
- Sentinel-2 - imagery 
- * DEPLOYMENT
- Render for the backend 
- Netlify for the whole bulk
- Model Api end point will be used 
### Web Application
The system includes a simple web interface where users can:
- Input environmental parameters
- Predict wheat yield in real-time


#### FUTURE WORK
  
- Work with Google Earth Engine
- Deep learning (LSTM and Transformers)
- A pipeline for satellite data in real time
- Making predictions at the field level with high-resolution images


