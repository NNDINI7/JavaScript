import pandas as pd


file_path = 'D:\JavaScript\data.csv'  # Replace with your CSV file path
df = pd.read_csv(file_path)


if 'percentage' in df.columns:
    df['updated_percentage'] = df['percentage'] + 2
    print(df[['percentage', 'updated_percentage']])
else:
    print("Column 'percentage' not found in CSV.")


#find the ascii value of arrow keys 
def get_arrow_key_ascii():
    arrow_keys = {
        'up': 38,
        'down': 40,
        'left': 37,
        'right': 39
    }
    return arrow_keys
print(get_arrow_key_ascii())

#generate spiral array of 4*4 matrix
def generate_spiral_matrix(n):
    spiral = [[0] * n for _ in range(n)]
    left, right, top, bottom = 0, n - 1, 0, n - 1
    num = 1

    while left <= right and top <= bottom:
        for i in range(left, right + 1):
            spiral[top][i] = num
            num += 1
        top += 1

        for i in range(top, bottom + 1):
            spiral[i][right] = num
            num += 1
        right -= 1

        if top <= bottom:
            for i in range(right, left - 1, -1):
                spiral[bottom][i] = num
                num += 1
            bottom -= 1

        if left <= right:
            for i in range(bottom, top - 1, -1):
                spiral[i][left] = num
                num += 1
            left += 1

    return spiral
print(generate_spiral_matrix(4))

#amstrong numbers from 1 to 100
def is_armstrong(num):
    order = len(str(num))
    return sum(int(digit) ** order for digit in str(num)) == num
def armstrong_numbers_in_range(start, end):
    return [num for num in range(start, end + 1) if is_armstrong(num)]
print(armstrong_numbers_in_range(1, 100))
