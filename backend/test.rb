require "./test2"

#my vars
name = "Laura"
language = "C"
other = "C++"

puts "Hello" #comment here
puts "Hello #{name}"
puts "Hello", 7
puts "Wow, %s, so much like that other language, %s" % [name, language+" or "+other]
puts "Hello" * 3 #comment here
#puts "I'd much rather you 'not'."
#puts 'I "said" do not touch this.'


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

# notice how we are using print instead of puts here. no enter at end of line
print end1 + end2 + end3 + end4 + end5 + end6
print end7 + end8 + end9 + end10 + end11 + end12

# this just is polite use of the terminal, try removing it
puts

puts <<SOME_STUFF
I am 
so loving this.
really
SOME_STUFF

formatter = "%s %s %s %s"
puts formatter % ["I doubt", "I will", "ever", "use this"]

print "type something: "
respuesta = gets.chomp()
puts "you typed " + respuesta

puts Test2.return_two_things("param1", "param2")