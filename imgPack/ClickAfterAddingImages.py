import os.path
Types = os.listdir()

# TODO Clean up this fucking mess...
JsArray = ""
for file in Types:
    if os.path.isdir(file) and file != "Python":
        print(file)
        JsArray += "const " + file + " = {"
        Type = file
        Races = os.listdir(file)
        imgsrc1 = "\"imgPack/" + file
        for file in Races:
            if os.path.isdir(Type + "/" + file):
                path1 = Type + "/" + file
                JsArray += file + ": {Default: ["
                steg22 = ""
                Acts = os.listdir(path1)
                imgsrc2 = imgsrc1 +"/" + file
                for file in Acts:
                    if os.path.isdir(path1 + "/" + file):
                        path2 = path1 + "/" + file
                        steg3 = file + ":{ Default: ["
                        steg4 = ""
                        images = os.listdir(path2)
                        imgsrc3 = imgsrc2 + "/" + file
                        for file in images:
                            if os.path.isdir(path2 + "/" + file):
                                path3 = path2 + "/" + file
                                steg4 += file + ": ["
                                images2 = os.listdir(path3)
                                imgsrc4 = imgsrc3 + "/" + file
                                for file in images2:
                                    if file.endswith(".png"):
                                        steg4 += imgsrc4 + "/"+file+"\","
                                    elif file.endswith(".jpg"):
                                        steg4 += imgsrc4 + "/"+file+"\","   
                                        print(file)
                                steg4 += "]," 
                            elif file.endswith(".png"):
                                steg3 += imgsrc3 + "/"+file+"\","
                            elif file.endswith(".jpg"):
                                steg3 += imgsrc3 + "/"+file+"\","
                        steg3 += "]," + steg4 + "}"
                        steg22 += steg3 + ","
                    elif file.endswith(".png"): 
                        JsArray += imgsrc2 + "/"+file+"\","
                    elif file.endswith(".jpg"):
                        JsArray += imgsrc2 + "/"+file+"\","
                JsArray += "],"+ steg22+" },"
        JsArray += "};"
Outfile = open("ImgPackArrays.js", "w")
Outfile.write(JsArray)
Outfile.close()
                


