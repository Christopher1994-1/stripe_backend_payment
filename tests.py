is_prod = False


def products(data):
    
    if is_prod == False:
        products = {"1": ['Product 1', 19.99, '{% static "images/product1.png" %}'],
                    "2": ["Product 2", 9.99, "{% static 'images/product2.png' %}"]
                    
                    }
    else:
        products = {}
        
    split_data = str(data).split(':')
    result = []
    
    for i in split_data:
        e = products[i]
        result.append(e)
    return result



g = '1:2'

c = products(g)

print(c)