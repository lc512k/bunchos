
# require 'open-uri'
module Test2

# open("http://www.ruby-lang.org/en") do |f|
#   f.each_line {|line| p line}
#   puts f.base_uri         # <URI::HTTP:0x40e6ef2 URL:http://www.ruby-lang.org/en/>
#   puts f.content_type     # "text/html"
#   puts f.charset          # "iso-8859-1"
#   puts f.content_encoding # []
#   puts f.last_modified    # Thu Dec 05 02:45:02 UTC 2002
# end

# arg1, arg2 = ARGV
# puts "what's the argument? #{arg1} #{arg2}"

	def test_function(param1, param2)
		puts param1
		puts param2
	end


	def return_function(param1, param2)
		param1 + param2 #return is optiononal when returning only one thing
	end

	def return_two_things(param1, param2)
		return param1, param2 #can return two things, is this an array?
	end


# test_function("a", "b")
# var = return_function("a", "b")
# puts var
# var2 = return_two_things("one", "two")
# puts var2
end