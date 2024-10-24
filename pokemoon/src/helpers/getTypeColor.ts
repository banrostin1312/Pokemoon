const getTypeColor = (type: string) => {
    switch (type) {
      case "grass":
        return "text-green-300"
      case 'water':
        return 'text-blue-300';
      case 'fire':
        return 'text-red-500';
      case 'bug':
        return 'text-green-700';
      case 'normal':
        return 'text-gray-200';
      case 'poison':
        return 'text-purple-800';
      case 'electric':
        return 'text-yellow-500';
      case 'ground':
        return 'text-brown-500';
      case 'fairy':
        return 'text-pink-400';
      case 'fighting':
        return 'text-orange-600';

      default:
       return "text-white"
    }
  }

  export default getTypeColor;