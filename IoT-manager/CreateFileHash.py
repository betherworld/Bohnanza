# Python program to find SHA256 hash string of a file
import hashlib
import sys

filename = sys.argv[1]
path = "/home/felix/Daten/Polybox/Studium/BlockchainSeminar/FileHash/Testfiles/"
#filename = input("Enter the input file name: )
file = path + filename
sha256_hash = hashlib.sha256()
with open(file,"rb") as f:
    # Read and update hash string value in blocks of 4K
    for byte_block in iter(lambda: f.read(4096),b""):
        sha256_hash.update(byte_block)
    print(sha256_hash.hexdigest())

