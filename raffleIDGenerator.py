import qrcode
import random
import json

totalTickets = 4960

if input("Generate id list (y/n): ") == "y":
	file = open('public\\files\\raffle\\raffleIDIndex.txt', 'w')
	idList = list(range(0, 4960))
	random.seed(1) #default is just a seed of 1
	for index in range(0, 4960):
		indexTo = random.randint(0, 4959)
		temp = idList[index]
		idList[index] = idList[indexTo]
		idList[indexTo] = temp
	file.write(str(idList))
	print("done")

if input("Clear json data (y/n): ") == "y" and input("Are you sure (y/n): ") == "y":
	file = open('public\\files\\raffle\\raffleIDInfo.json', 'w')
	emptyIDInfoList = {}
	for id in range(0, 4690):
		emptyIDInfoList[id] = {"name": "none", "phone": "none", "address": "none"}
	json.dump(emptyIDInfoList, file)
	print(emptyIDInfoList)
	print("done")
	
