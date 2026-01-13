from PIL import Image
import os

path = "public/images/team/Sushree.png"
print(f"Checking path: {os.path.abspath(path)}")
if os.path.exists(path):
    try:
        img = Image.open(path)
        print(f"Original size: {img.size}")
        # Resize to max 500 width (enough for team profile)
        base_width = 500
        w_percent = (base_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        img = img.resize((base_width, h_size), Image.Resampling.LANCZOS)
        img.save(path, optimize=True)
        print(f"New size: {img.size}")
        print("Resized successfully.")
    except Exception as e:
        print(f"Error: {e}")
else:
    print("File not found.")
