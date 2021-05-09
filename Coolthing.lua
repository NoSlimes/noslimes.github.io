word = io.read()
correct = {"En åklagare är en jurist som är anställd av staten för att tillsammans med polisen utreda brott och väcka åtal.","Vid rättegången berättar åklagaren för domarna allt som talar för att den åtalade är skyldig."}
index = 1
while true do
  if string.find(word:lower(), correct [index]) then 
    print("correct")
    break;
  end
  index = index + 1
end