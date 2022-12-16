cubevalue = 96
clickpower = 1.2
cubesize = 100
originalcubesize = 100

for i in range(4):
    cubesize = cubesize - clickpower
    reward = cubevalue/originalcubesize*clickpower

    print("CubeSize: ",cubesize)
    print("Coins earned: ",reward)