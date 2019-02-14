import mysql.connector as mdb
import time
import datetime
import csv

ts =time.time()

with open('IoTGPSData.csv', 'r') as f:
    for row in reversed(list(csv.reader(f))):
        rlat = row[0]
        rlng = row[1]
        rdate = row[2]
        break

#rlat = 5.3
#rlng = 3.2
rdate = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

mydb = mdb.connect(
    host = "sql7.freesqldatabase.com",
    user = "sql7279049",
    passwd = "SsAFq7F2I9"
)

cur = mydb.cursor()
cur.execute("INSERT INTO sql7279049.gpsData (lat, lng, date) VALUES (%s,%s,%s)",(rlat,rlng,rdate))
mydb.commit()
