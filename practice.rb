# Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
def print_numbers_divisible_by_three
  index = 1
  while index <= 1000
    if index % 3 == 0
      puts index
    end
    index += 1
  end
end
# print_numbers_divisible_by_three


# Write a method that accepts an array of strings and prints out every other string.
def print_every_other_item(strings)
  index = 0
  strings.each do |string|
    if index % 2 == 0
      puts string
    end
    index += 1
  end
end
# print_every_other_item(["a", "b", "c", "d", "e"])


# Write a method that accepts an array of numbers and returns the sum.
def compute_sum(numbers)
  sum = 0
  numbers.each do |number|
    sum += number
  end
  return sum
end
# puts compute_sum([2, 4, 5])


# Start with the hash: city_populations = {chi: 2700000}
# Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
city_populations = {chi: 2700000}
city_populations[:nyc] = 8400000
city_populations[:sf] = 800000
# p city_populations



# Write a method that prints out every number from 1 to 100. 

def one_to_one_hundred
  i = 0
  while i < 100
    p i + 1
    i += 1
  end
end

# one_to_one_hundred

# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

def every_other
  i = 1

  while i < 100
    p i
    i += 2
  end
end

# every_other

# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

def count_of_55s(numbers)
  count = 0
  numbers.each do |number|
    if number == 55
      count += 1
    end
  end
  count
end

# p count_of_55s([1,2,3,4,55,55,55,6,7,8])

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

def awesomesauced(strings)
  final_array = []
  strings.each do |string|
    final_array << string
    final_array << "awesomesauce"
  end
  final_array.pop
  return final_array
end

# p awesomesauced(["a", "b", "c", "d", "e"])
# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}
# item_amounts = {chair: 5, table: 2}

# item_amounts[:chair] = 3

# p item_amounts


# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:desk] = 7

# p item_amounts


# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

def factorial(number)
  product = 1
  while number > 0
    product *= number
    number -= 1
  end
  return product
end

# p factorial(5)
# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].


def all_sums(numbers1, numbers2)
  final_array = []
  numbers1.each do |number1|
    numbers2.each do |number2|
      final_array << number1 + number2      
    end
  end
  return final_array
end


p all_sums([1, 5, 10], [100, 500, 1000])