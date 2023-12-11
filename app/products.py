is_prod = False


def products(data):
    
    if is_prod == False:
        products = {
            "1": ['Product 1', 19.99, "images/product1.png", 0],
            "2": ["Product 2", 9.99, 'images/product2.png', 0],
            "3": ["Product 3", 59.99, 'images/product3.png', 0],
            "4": ["Product 4", 39.99, 'images/product4.png', 0],
            "5": ["Product 5", 79.99, 'images/product5.png', 0],
            "6": ["Product 6", 199.99, 'images/product6.png', 0], 
            }
    else:
        products = {}
        
    split_data = str(data).split(':')
    result = []
    total = []
    
    
    for i in split_data:
        e = products[i]
        t = products[i][1]
        result.append(e)
        total.append(t)
        
    strTotal = sum(total)
    indexValue = str(strTotal).index('.')
    
    if indexValue == 2:
        total2 = str(strTotal)[:5]
    else:
        total2 = str(strTotal)[:6]
    
    return result, total2