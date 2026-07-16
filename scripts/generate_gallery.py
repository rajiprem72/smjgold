import os
import json

IMAGE_FOLDER = "images/dollar"
OUTPUT_FILE = "data/dollar-images.json"

allowed_extensions = (
    ".jpg",
    ".jpeg",
    ".png",
    ".webp"
)

images = []

for file in os.listdir(IMAGE_FOLDER):

    if file.lower().endswith(allowed_extensions):

        images.append(file)

images.sort()

with open(OUTPUT_FILE, "w") as f:

    json.dump(images, f, indent=4)

print(
    f"Generated {len(images)} images"
)
