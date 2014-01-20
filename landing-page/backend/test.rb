require "./test2"

#my vars
name = "Laura"
language = "C"
other = "C++"

#trying out puts
puts "Hello" #comment here
puts "Hello #{name}"
puts "Hello", 7
puts "Wow, %s, so much like that other language, %s" % [name, language+" or "+other]
puts "Hello" * 3 #comment here'
puts

#tyring out print
end1 = "C"
end2 = "h"
end3 = "e"
end4 = "e"
end5 = "s"
end6 = "e"
end7 = "B"
end8 = "u"
end9 = "r"
end10 = "g"
end11 = "e"
end12 = "r"

print end1 + end2 + end3 + end4 + end5 + end6
print end7 + end8 + end9 + end10 + end11 + end12

puts
puts

#trying out paragraphs
puts <<SOME_STUFF
I am 
so loving this.
really
SOME_STUFF

formatter = "%s %s %s %s"
puts formatter % ["I doubt", "I will", "ever", "use this"]
puts

# print "type something: "
# respuesta = gets.chomp()
# puts "you typed " + respuesta
# puts

#conditionals
if 3 == 4 or false
	puts "this never happened"
elsif 4 < 5
	puts "this happens. elsif. elsif. elsif."
else
	puts "this happens to"
end
puts

#looping and arrays

array = ["a", "b", 5,  "c", "d", "end"]
copy = []

for item in array
	puts "this is awesome", item
end

array.each do |item|
	puts "this is slightly less awesome, but only because it looks weird"
	copy.push(item)
end

puts copy
puts

i = 0
while i < array.length
	puts "whiling"
	i += 1
end


#trying to run method in other class
puts Test2.return_two_things("param1", "param2")
puts
