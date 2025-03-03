<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de Suivi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 8px;
        }
        table {
            width: 10%;
            border-collapse: collapse;
            margin: 8px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        /* Réduire la taille de la colonne Obj */
        th:nth-child(2), td:nth-child(2) {
            width: 50px; /* Ajustez la largeur selon vos besoins */
        }
    </style>
</head>
<body>

<h2>Tableau de Suivi</h2>

<table>
    <tr>
        <th>Indicateur</th>
        <th>Obj</th>
        <th>Réalisé</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>BB</td>
        <td><input type="number" id="bb-objective" value="0"></td>
        <td id="bb-realized">0</td>
        <td>
            <button onclick="updateRealized('bb', 1)">+1</button>
            <button onclick="updateRealized('bb', -1)">-1</button>
        </td>
    </tr>
    <tr>
        <td>FM</td>
        <td><input type="number" id="fm-objective" value="0"></td>
        <td id="fm-realized">0</td>
        <td>
            <button onclick="updateRealized('fm', 1)">+1</button>
            <button onclick="updateRealized('fm', -1)">-1</button>
        </td>
    </tr>
    <tr>
        <td>Assurance</td>
        <td><input type="number" id="assurance-objective" value="0"></td>
        <td id="assurance-realized">0</td>
        <td>
            <button onclick="updateRealized('assurance', 1)">+1</button>
            <button onclick="updateRealized('assurance', -1)">-1</button>
        </td>
    </tr>
    <tr>
        <td>Mev</td>
        <td><input type="number" id="mev-objective" value="0"></td>
        <td id="mev-realized">0</td>
        <td>
            <button onclick="updateRealized('mev', 1)">+1</button>
            <button onclick="updateRealized('mev', -1)">-1</button>
        </td>
    </tr>
    <tr>
        <td>Pro</td>
        <td><input type="number" id="pro-objective" value="0"></td>
        <td id="pro-realized">0</td>
        <td>
            <button onclick="updateRealized('pro', 1)">+1</button>
            <button onclick="updateRealized('pro', -1)">-1</button>
        </td>
    </tr>
</table>

<script>
    function updateRealized(indicator, change) {
        const realizedCell = document.getElementById(`${indicator}-realized`);
        let currentValue = parseInt(realizedCell.innerText);
        
        currentValue += change;
        if (currentValue < 0) currentValue = 0; // Empêcher les valeurs négatives
        
        realizedCell.innerText = currentValue;
    }
</script>

</body>
</html>
