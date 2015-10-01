def counter(string)
  start = 0
  fin = 1
  length = string.length - 1

  while start < length
    if string[start] == "("
      if fin <= length
        if string[fin] == ")"
          string.slice!(start)
          string.slice!(fin - 1)
          puts string
          # recursive call to "counter"
          counter(string)
        end
        fin += 1
      else
        puts string
        return "Syntax Error"
      end
    else
      start += 1
    end
  end
  if string.include?("(") || string.include?(")")
    return "Syntax Error"
  else
    return "Succesful Statement Evaluation"
  end
end


# Test function
expression = "((((((((1*(1-1))))))(((((())((((((((((())))))))))))()))))))"

puts counter(expression)
