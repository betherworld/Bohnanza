# GPStoFILE

you have to configure your rasperry pi according to this tutorial: https://medium.com/@DefCon_007/using-a-gps-module-neo-7m-with-raspberry-pi-3-45100bc0bb41


Briefely in your terminal:

    sudo apt-get install gpsd gpsd-clients
    sudo gpsd /dev/ttyS0 -F /var/run/gpsd.sock
    stty -F /dev/ttyS0 -echo
    
to check for data stream:

    cat /dev/ttyS0

or: 

    gpsmon /dev/ttyS0

# write2db
short script to put the verification data onto DB

# SQLscript
setup of our verification data demo database

# CreateFileHash
to ensure the database cannot be altered after all verification data is collected a hash of the database export (csv-file) which is  written into the corresponding BeanBlock is created usin this file. 
